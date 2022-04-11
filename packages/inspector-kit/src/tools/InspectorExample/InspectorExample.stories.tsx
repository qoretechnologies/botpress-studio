import { ComponentMeta } from '@storybook/react'
import React, { useState, useCallback } from 'react'

import { BackgroundGrid } from '../../storybook'
import InspectorExample from '.'

export default {
  title: 'tools/InspectorExample',
  component: InspectorExample
} as ComponentMeta<typeof InspectorExample>

export const Primary = () => {
  const [panes, setPanes] = useState([
    {
      id: 'node_something',
      name: 'Node',
      forms: [
        {
          id: 'basic',
          name: 'Basic',
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
            }
          ]
        },
        {
          id: 'custom',
          name: 'Custom',
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
            }
          ]
        },
        {
          id: 'new',
          name: 'New',
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
            }
          ]
        }
      ]
    },
    {
      id: 'text_01',
      name: 'Text',
      forms: [
        {
          id: 'basic',
          name: 'Basic',
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
            }
          ]
        }
      ]
    },
    {
      id: 'audio_01',
      name: 'Audio',
      forms: [
        {
          id: 'tts',
          name: 'Speech Synth (TTS)',
          form: []
        },
        {
          id: 'eq',
          name: 'Audio Levels',
          form: []
        }
      ]
    },
    {
      id: 'audio_02',
      name: 'Audio',
      forms: [
        {
          id: 'tts',
          name: 'Speech Synth (TTS)',
          form: []
        },
        {
          id: 'eq',
          name: 'Audio Levels',
          form: []
        }
      ]
    },
    {
      id: 'card_01',
      name: 'Card',
      forms: [
        {
          id: 'card',
          name: 'Card Stuff',
          form: []
        }
      ]
    },
    {
      id: 'loc_01',
      name: 'Location',
      forms: [
        {
          id: 'location',
          name: 'Find a location',
          form: []
        },
        {
          id: 'provider',
          name: 'Setup Provider',
          form: []
        },
        {
          id: 'meta',
          name: 'Meta Information',
          form: []
        }
      ]
    },
    {
      id: 'text_02',
      name: 'Text',
      forms: [
        {
          id: 'basic',
          name: 'Basic',
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
            }
          ]
        }
      ]
    }
  ])

  return (
    <BackgroundGrid>
      <InspectorExample panes={panes}>{/* <TabBar.Tab /> */}</InspectorExample>
    </BackgroundGrid>
  )
}
Primary.story = {
  name: 'Main View'
}
