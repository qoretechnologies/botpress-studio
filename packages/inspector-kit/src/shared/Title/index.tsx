import React from 'react'

import style from './style.scss'

interface OwnProps {
  value?: string
}

const Title = ({ value }: OwnProps) => {
  return <h3 className={style.title}>{value}</h3>
}

export default Title
