import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { InspectorWindow } from '../../storybook'
import Label from '.'

export default {
  title: 'Shared/Label',
  component: Label
} as ComponentMeta<typeof Label>

export const Primary = () => (
  <InspectorWindow>
    <Label />
  </InspectorWindow>
)
Primary.story = {
  name: 'Main View'
}
