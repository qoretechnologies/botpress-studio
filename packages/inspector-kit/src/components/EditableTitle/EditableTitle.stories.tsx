import { Button } from '@blueprintjs/core'
import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { InspectorWindow } from '../../storybook'
import { EditableTitle } from '.'

export default {
  title: 'Components/EditableTitle',
  component: EditableTitle
} as ComponentMeta<typeof EditableTitle>

export const Primary = () => (
  <InspectorWindow>
    <EditableTitle defaultValue="Howdy Partner" />
  </InspectorWindow>
)
Primary.story = {
  name: 'Main View'
}

// export const Controlled = () => {
//   const [value, setValue] = React.useState('')
//   return (
//     <div>
//       <Input placeholder="Enter your name" value={value} onChange={(e) => setValue(e.target.value)} />
//       {value && <span>Hello {value} 👋</span>}
//     </div>
//   )
// }
// Controlled.story = {
//   name: 'Controlled'
// }

// export const LeftIcon = () => <Input defaultValue="I have an icon" leftIcon="user" />
// LeftIcon.story = {
//   name: 'Left Icon'
// }

// export const RightElement = () => (
//   <Input defaultValue="I have a right element" rightElement={<Button>A Button</Button>} />
// )
// RightElement.story = {
//   name: 'Right Element'
// }

// export const LeftElement = () => (
//   <Input
//     placeholder="Everybody clap your hands"
//     leftElement={<Button>Slide to the left</Button>}
//     rightElement={<Button>Slide to the right</Button>}
//   />
// )
