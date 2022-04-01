import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { InspectorWindow } from '../../storybook'
import ReorderList from '.'

export default {
  title: 'Components/ReorderList',
  component: ReorderList
} as ComponentMeta<typeof ReorderList>

export const Primary = () => (
  <InspectorWindow>
    <ReorderList label="Messages" help="Click to add new message" placeholder="No Messages" />
  </InspectorWindow>
)
Primary.story = {
  name: 'Main View'
}
