import React, { FC } from 'react'

import { SidePane, FieldContainer } from '../shared'
// import style from './style.scss'

interface OwnProps {
  activeSidePane?: any
}

interface CustomSubComponents {
  SidePane: typeof SidePane
}

const Custom: FC<OwnProps> & CustomSubComponents = ({ children, activeSidePane }) => {
  return (
    <FieldContainer>
      {children}
      {activeSidePane}
    </FieldContainer>
  )
}

Custom.SidePane = SidePane

export default Custom
