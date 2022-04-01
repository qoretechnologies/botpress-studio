import React from 'react'

import style from './style.scss'

interface OwnProps {
  onClick?: () => void
}

const AddIcon = ({ onClick }: OwnProps) => {
  return (
    <svg
      onClick={onClick}
      className={style.add}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.612488" y="0.591797" width="16.8875" height="16.8169" rx="3.5" fill="white" stroke="#0070F7" />
      <path
        d="M13.3801 7.9358H9.99611V4.5518H8.12411V7.9358H4.74011V9.8078H8.12411V13.1918H9.99611V9.8078H13.3801V7.9358Z"
        fill="#0070F7"
      />
    </svg>
  )
}

export default AddIcon
