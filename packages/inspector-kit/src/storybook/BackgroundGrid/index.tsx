import cx from 'classnames'
import React, { FC } from 'react'

import style from './style.scss'

const BackgroundGrid: FC = ({ children }) => {
  return <div className={style.backgroundGrid}>{children}</div>
}

export default BackgroundGrid
