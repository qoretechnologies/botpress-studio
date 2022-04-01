import React, { FC } from 'react'

import { AddIcon, Label } from '../../shared'
import style from './style.scss'

interface OwnProps {
  label?: string
  hint?: string
  req?: boolean
  help?: string
  placeholder?: string
}

const ReorderList: FC<OwnProps> = ({ label, hint, req, help, placeholder }) => {
  const msgsTmp: Array<string> = [
    // 'jghjg', 'kiguyg'
  ]
  return (
    <div className={style.msgComponent}>
      {/* Label, tooltip on hover, required | super input */}
      <Label value={label} hint={hint} req={req} />
      {/* wrapper */}
      <div className={style.messages}>
        {/* Message Box and plus button */}
        <div className={style.messageHeader}>
          <p>{help}</p>
          <AddIcon />
        </div>

        {/* Message Container */}
        <div className={style.messageContainer}>
          <div className={style.placeholderText}>{placeholder}</div>
        </div>
      </div>

      {/* 1 message required  */}
    </div>
  )
}

export default ReorderList
