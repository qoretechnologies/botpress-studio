import React, { FC } from 'react'

import style from './style.scss'

interface OwnProps {}

const SidePane: FC<OwnProps> = ({ children }) => {
  return <div className={style.sideContainer}>{children}</div>
}

export default SidePane
