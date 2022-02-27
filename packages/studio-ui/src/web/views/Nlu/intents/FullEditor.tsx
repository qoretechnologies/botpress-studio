import { DatasetIssue } from '@botpress/nlu-client'
import { NLU } from 'botpress/sdk'
import { utils } from 'botpress/shared'
import _ from 'lodash'
import React, { FC, useEffect, useRef, useState } from 'react'

import { NluClient } from '../client'
import { fetchIssues } from './fetch-issues'

import IntentHint from './IntentHint'
import Slots from './slots/Slots'
import style from './style.scss'
import { removeSlotFromUtterances, renameSlotInUtterances } from './utterances-state-utils'
import { UtterancesEditor } from './UtterancesEditor'

interface Props {
  intent: string
  api: NluClient
  contentLang: string
  showSlotPanel?: boolean
}

export const IntentEditor: FC<Props> = (props) => {
  const [intent, setIntent] = useState<NLU.IntentDefinition>()
  const [issues, setIssues] = useState<DatasetIssue<'E_000'>[]>([])

  const debouncedAPISaveIntentAndReloadIssues = useRef(
    _.debounce(async (newIntent: NLU.IntentDefinition) => {
      await props.api.createIntent(newIntent)
      const issues = await fetchIssues(props)
      setIssues(issues)
    }, 2500)
  )

  useEffect(() => {
    void props.api.fetchIntent(props.intent).then((intent) => {
      setIntent(intent)
      utils.inspect(intent)
    })
    void fetchIssues(props).then(setIssues)

    return () => void debouncedAPISaveIntentAndReloadIssues.current.flush()
  }, [props.intent])

  const saveIntentAndReloadIssues = async (newIntent: NLU.IntentDefinition, opt: { debounce: boolean }) => {
    setIntent(newIntent)
    if (opt.debounce) {
      await debouncedAPISaveIntentAndReloadIssues.current(newIntent)
      return
    }
    await props.api.createIntent(newIntent)
    await fetchIssues(props).then(setIssues)
  }

  const handleUtterancesChange = async (newUtterances: string[]) => {
    const newIntent = { ...intent, utterances: { ...intent.utterances, [props.contentLang]: newUtterances } }
    await saveIntentAndReloadIssues(newIntent, { debounce: true })
  }

  const handleSlotsChange = async (slots: NLU.SlotDefinition[], { operation, name, oldName }) => {
    let newUtterances = [...intent.utterances[props.contentLang]]
    if (operation === 'deleted') {
      newUtterances = removeSlotFromUtterances(newUtterances, name)
    } else if (operation === 'modified') {
      newUtterances = renameSlotInUtterances(newUtterances, oldName, name)
    }

    const newIntent = { ...intent, utterances: { ...intent.utterances, [props.contentLang]: newUtterances }, slots }
    void saveIntentAndReloadIssues(newIntent, { debounce: false })
  }

  const utterances = (intent && intent.utterances[props.contentLang]) || []

  if (!intent) {
    // TODO display a fetching state instead
    return null
  }
  return (
    <div className={style.intentEditor}>
      <div>
        <div className={style.header}>
          <IntentHint intent={intent} contentLang={props.contentLang} />
        </div>
        <UtterancesEditor
          intentName={intent.name}
          utterances={utterances}
          onChange={handleUtterancesChange}
          slots={intent.slots}
          issues={issues}
        />
      </div>
      {props.showSlotPanel && <Slots slots={intent.slots} api={props.api} onSlotsChanged={handleSlotsChange} />}
    </div>
  )
}
