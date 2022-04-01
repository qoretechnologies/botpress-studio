import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { InspectorWindow } from '../../storybook'
import AddIcon from '.'

export default {
  title: 'Shared/AddIcon',
  component: AddIcon
} as ComponentMeta<typeof AddIcon>

export const Primary = () => (
  <InspectorWindow>
    <AddIcon />
  </InspectorWindow>
)
Primary.story = {
  name: 'Main View'
}
