import { ComponentMeta } from '@storybook/react'
import React from 'react'

import PaneBuilder from '.'

export default {
  title: 'Tools/PaneBuilder',
  component: PaneBuilder
} as ComponentMeta<typeof PaneBuilder>

export const Primary = () => <PaneBuilder />
Primary.story = {
  name: 'Main View'
}
