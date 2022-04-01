import React from 'react'

import style from './style.scss'

interface OwnProps {
  value?: string
}

const Text = ({ value }: OwnProps) => {
  return <p className={style.text}>{value}</p>
}

export default Text
