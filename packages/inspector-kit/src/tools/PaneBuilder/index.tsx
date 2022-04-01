import { TextArea, Button } from '@blueprintjs/core'

import React, { useState, useCallback, useEffect } from 'react'

import { Divider, Input, ReorderList, SuperInput, Text, Title } from '../../components'
import style from './style.scss'

const COMPS: any = {
  'reorder-list': ReorderList,
  'super-input': SuperInput,
  input: Input,
  title: Title,
  text: Text,
  divider: Divider
}

const TMP_FORM = {
  title: 'Custom Skill',
  info: 'Does something cool I bet!',
  form: [
    {
      id: 'messages',
      type: 'reorder-list',
      props: {
        label: 'Messages',
        hint: 'Some hint',
        req: true,
        help: 'Click to add new message',
        placeholder: 'No new messages'
      }
    },
    {
      id: 'sizeOfMessages',
      type: 'input',
      props: {
        value: 'Size of Messages (in px)'
      }
    }
  ]
}

const PaneBuilder = () => {
  const [form, setForm] = useState(TMP_FORM) as any
  const [textForm, setTextForm] = useState(JSON.stringify(TMP_FORM, null, 4))
  const setNewState = useCallback(
    (e: any) => {
      try {
        const strValue = JSON.parse(e.target.value)
        console.log(strValue)
        setForm(strValue)
        setTextForm(e.target.value)
      } catch {
        console.log('err')
        console.log(e.target.value)
        setTextForm(e.target.value)
      }
    },
    [form, setForm, setTextForm]
  )

  useEffect(() => {
    setTextForm(JSON.stringify(form, null, 4))
  }, [form, setTextForm])

  return (
    <div className={style.container}>
      <div className={style.iContainer}>
        <div className={style.inspector}>
          <Title value={form.title} />
          <Divider />
          <Text value={form.info} />
          {form.form.map((f: any) => {
            try {
              const Comp = COMPS[f.type]
              if (Comp) {
                return <Comp {...f.props} />
              }
            } catch {}
            return null
          })}
        </div>
        <Button
          onClick={() => {
            setForm({
              ...form,
              form: [
                ...form.form,
                {
                  id: 'new_ReorderList',
                  type: 'reorder-list',
                  props: {
                    label: 'Messages',
                    hint: 'Some hint',
                    req: true,
                    help: 'Click to add new message',
                    placeholder: 'No new messages'
                  }
                }
              ]
            })
          }}
        >
          Add ReorderList
        </Button>
        <Button
          onClick={() => {
            setForm({
              ...form,
              form: [
                ...form.form,
                {
                  id: 'new_text',
                  type: 'text',
                  props: {
                    value: 'New Text'
                  }
                }
              ]
            })
          }}
        >
          Add Text
        </Button>
        <Button
          onClick={() => {
            setForm({
              ...form,
              form: [
                ...form.form,
                {
                  id: 'new_title',
                  type: 'title',
                  props: {
                    value: 'New Title'
                  }
                }
              ]
            })
          }}
        >
          Add Title
        </Button>
        <Button
          onClick={() => {
            setForm({
              ...form,
              form: [
                ...form.form,
                {
                  id: 'new_divider',
                  type: 'divider',
                  props: {}
                }
              ]
            })
          }}
        >
          Add Divider
        </Button>
        <Button
          onClick={() => {
            setForm({
              ...form,
              form: [
                ...form.form,
                {
                  id: 'new_input',
                  type: 'input',
                  props: {
                    value: 'Hello world'
                  }
                }
              ]
            })
          }}
        >
          Add input
        </Button>
      </div>
      <TextArea className={style.textAreaThing} onChange={setNewState} value={textForm} />
    </div>
  )
}

export default PaneBuilder
