import React, { FC } from 'react'

// import style from './style.scss'

interface OwnProps {}

const FieldContainer: FC<OwnProps> = ({ children }) => {
  return <div>{children}</div>
}

export default FieldContainer
