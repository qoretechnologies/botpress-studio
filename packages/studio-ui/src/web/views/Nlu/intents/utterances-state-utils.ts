import { DatasetIssue } from '@botpress/nlu-client'
import { NLU } from 'botpress/sdk'
import { parseUtterance } from 'common/utterance-parser'
import _ from 'lodash'
import { MarkJSON, NodeJSON, TextJSON, Value, ValueJSON } from 'slate'

export const SLOT_MARK = 'slotName'
export const ISSUE_MARK = 'slotIssue'

interface ParsedSlot {
  name: string
  value: string
  rawPosition: {
    start: number
    end: number
  }
  cleanPosition: {
    start: number
    end: number
  }
}

const textNode = (text: string, from: number, to: number | undefined = undefined): TextJSON => ({
  object: 'text',
  text: text.slice(from, to),
  marks: []
})

const slotNode = (slot: ParsedSlot, uttIdx: number, issue?: DatasetIssue<'E_000'>): TextJSON => ({
  object: 'text',
  text: slot.value,
  marks: [makeSlotMark(slot.name, uttIdx, issue)]
})

const emptySlotNode = (slot: ParsedSlot): TextJSON => ({
  object: 'text',
  text: slot.value,
  marks: []
})

export const textNodesFromUtterance = (
  allSlots: NLU.SlotDefinition[],
  rawUtterance: string,
  issues: DatasetIssue<'E_000'>[],
  idx: number = 0
): TextJSON[] => {
  const { utterance, parsedSlots } = parseUtterance(rawUtterance)

  return _.chain(parsedSlots)
    .flatMap((pslot, i, all) => {
      const previousSlot = all[i - 1]
      const from = previousSlot?.cleanPosition.end ?? 0
      const to = pslot.cleanPosition.start

      /**
       * This condition won't work if the utterance contains consecutive or leading spaces, but the issue E_004 can help flag those.
       * TODO:
       * - either report issue E_004 (so when its fixed by the user we can display E_000)
       * - modify E_000 linter in nlu server so it works without cleaning the utterance
       */
      const issue: DatasetIssue<'E_000'> | undefined = issues.find(
        (issue) =>
          issue.data.cleanCharStart === pslot.cleanPosition.start && issue.data.cleanCharEnd === pslot.cleanPosition.end
      )

      const slotExists = allSlots.some((s) => s.name === pslot.name)
      const pslotNode = slotExists ? slotNode(pslot, idx, issue) : emptySlotNode(pslot)

      return [textNode(utterance, from, to), pslotNode]
    })
    .thru((nodes) => {
      // append remaining
      const start = _.last(parsedSlots)?.cleanPosition.end ?? 0
      return [...nodes, textNode(utterance, start)]
    })
    .filter((n) => !!n.text)
    .value()
}

// Unit tests are available for this function but somehow not working on our CI
// uncomment when editing this function
export const utterancesToValue = (
  allSlots: NLU.SlotDefinition[],
  issues: DatasetIssue<'E_000'>[],
  utterances: string[],
  selection = undefined
): Value => {
  const summary = utterances[0] || ''
  const rest = utterances.length > 1 ? utterances.slice(1) : []

  const value: ValueJSON = {
    object: 'value',
    document: {
      object: 'document',
      nodes: [
        {
          object: 'block',
          type: 'title',
          data: {},
          nodes: textNodesFromUtterance(
            allSlots,
            summary,
            issues.filter((issue) => issue.data.utteranceIdx === 0),
            0
          )
        },
        ...rest.map((text: string, i: number) => ({
          object: 'block',
          type: 'paragraph',
          data: {},
          nodes: textNodesFromUtterance(
            allSlots,
            text,
            issues.filter((issue) => issue.data.utteranceIdx - 1 === i),
            i + 1
          )
        }))
      ] as NodeJSON[]
    }
  }
  if (selection) {
    value['selection'] = selection
  }
  return Value.fromJS(value)
}

export const valueToUtterances = (value: Value): string[] => {
  return value
    .getIn(['document', 'nodes'])
    .map((block) =>
      block.nodes.reduce((utt: string, node, idx: number) => {
        const value = node.get('text')
        if (node.marks.size > 0) {
          const slot = node.marks.first().data.get(SLOT_MARK)
          return `${utt}[${value}](${slot})`
        }

        return `${utt}${value}`
      }, '')
    )
    .filter(_.identity)
    .toJS()
}

export const removeSlotFromUtterances = (utterances: string[], slotName: string) => {
  const regex = new RegExp(`\\[([^\\[\\]\\(\\)]+?)\\]\\(${slotName}\\)`, 'gi')

  return utterances.map((u) => u.replace(regex, '$1'))
}

export const renameSlotInUtterances = (utterances: string[], prevSlotName: string, newSlotName: string) => {
  const regex = new RegExp(`\\[([^\\(\\)\\[\\]]+?)\\]\\(${prevSlotName}\\)`, 'gi')

  return utterances.map((u) => u.replace(regex, `[$1](${newSlotName})`))
}

export const makeSlotMark = (slotName: string, utteranceIdx: number, issue?: DatasetIssue<'E_000'>): MarkJSON => ({
  object: 'mark',
  type: 'slot',
  data: { [SLOT_MARK]: slotName, utteranceIdx, [ISSUE_MARK]: issue }
})
