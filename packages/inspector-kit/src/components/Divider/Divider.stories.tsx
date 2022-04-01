import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { InspectorWindow } from '../../storybook'
import Divider from '.'

export default {
  title: 'Components/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>

export const Primary = () => (
  <InspectorWindow>
    <Divider />
  </InspectorWindow>
)
Primary.story = {
  name: 'Main View'
}
