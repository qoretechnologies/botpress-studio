import cx from 'classnames'
import React from 'react'
import style from './style.scss'

interface OwnProps {
  value?: string
  hint?: string
  req?: boolean
}

const Label = ({ value, hint, req }: OwnProps) => {
  return (
    <div className={style.label}>
      <h4>
        <span className={cx({ [style.hint]: hint })}>{value}</span>
        {req && <span className={style.req}>&nbsp;*</span>}
      </h4>
      {/* <DynamicInputButton /> */}
    </div>
  )
}

export default Label
