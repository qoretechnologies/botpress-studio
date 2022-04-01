import { Button } from '@blueprintjs/core'
import { ComponentMeta } from '@storybook/react'
import React from 'react'
import { data } from '../../../demo/data'
import { InspectorWindow } from '../../storybook'
import { SiTypes, SuperInput } from '.'

export default {
  title: 'Components/SuperInput',
  component: SuperInput
} as ComponentMeta<typeof SuperInput>

const code0 = 'event.state.user ? "yes" : "sorry unknown user" || true'
const code1 =
  'this is: {{event.state.user.language}} text in between {{ _.add(9, 10) }} else if keywords {{ user.language }}'
const code2 = 'this is for: {{user.timezone}} is the time zone sir and {{user.language}} is the language!'
const code3 = `I wish you a very happy new year and happy {{ state.session.usename }} birthday!

Math function: {{ Math.round(session.slots.device.confidence) }}
Timezone: {{user.timezone}}
Object Demo: {{ Object.keys({hello: "world"}) }}

This is the end.`

const eventState = {
  event: data,
  ...data,
  ...data.state
}

const msgs = {
  noGlobsEvalMsg: 'no eventState'
}

export const Primary = () => (
  <InspectorWindow>
    <SuperInput type={SiTypes.EXPRESSION} value={code0} eventState={eventState} {...msgs} />
  </InspectorWindow>
)
Primary.story = {
  name: 'Expression'
}

export const ExpressionNoEventState = () => (
  <InspectorWindow>
    <SuperInput type={SiTypes.EXPRESSION} value={code0} {...msgs} />
  </InspectorWindow>
)
ExpressionNoEventState.story = {
  name: 'Expression (no eventState)'
}

export const Valid = () => (
  <InspectorWindow>
    <SuperInput value={code2} eventState={eventState} {...msgs} />
  </InspectorWindow>
)

export const Invalid = () => (
  <InspectorWindow>
    <SuperInput value={code1} eventState={eventState} {...msgs} autoFocus />
  </InspectorWindow>
)

export const SomethingElse = () => (
  <InspectorWindow>
    <SuperInput value={code3} />
  </InspectorWindow>
)
SomethingElse.story = {
  name: 'Something Else (no eventState)'
}

export const AcceptsInputProps = () => (
  <InspectorWindow>
    <SuperInput leftIcon="user" placeholder="Email Address" rightElement={<Button>Sign Up</Button>} />
  </InspectorWindow>
)
AcceptsInputProps.story = {
  name: 'Accepts Input Props'
}
