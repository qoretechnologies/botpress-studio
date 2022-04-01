import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { InspectorWindow } from '../../storybook'
import Text from '.'

export default {
  title: 'Components/Text',
  component: Text
} as ComponentMeta<typeof Text>

export const Primary = () => (
  <InspectorWindow>
    <Text value="hello from text" />
  </InspectorWindow>
)
Primary.story = {
  name: 'Main View'
}
