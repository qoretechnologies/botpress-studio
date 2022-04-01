import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { InspectorWindow } from '../../storybook'
import Grabber from '.'

export default {
  title: 'Shared/Grabber',
  component: Grabber
} as ComponentMeta<typeof Grabber>

export const Primary = () => (
  <InspectorWindow>
    <Grabber />
  </InspectorWindow>
)
Primary.story = {
  name: 'Main View'
}
