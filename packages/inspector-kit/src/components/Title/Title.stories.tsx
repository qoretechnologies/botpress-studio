import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { InspectorWindow } from '../../storybook'
import Title from '.'

export default {
  title: 'Components/Title',
  component: Title
} as ComponentMeta<typeof Title>

export const Primary = () => (
  <InspectorWindow>
    <Title value="hello from text" />
  </InspectorWindow>
)
Primary.story = {
  name: 'Main View'
}
