import React from 'react'

import NuPane from '../../../NuPane'
import { AddIcon } from '../../../shared'

import style from './style.scss'

interface OwnProps {
  label: string
  blocks?: any[]
  addBlock: () => void
}

const BlockLibrary = () => {
  return (
    <NuPane.Custom.SidePane>
      <div>hello</div>
    </NuPane.Custom.SidePane>
  )
}

const BlockList = ({ label, blocks, addBlock }: OwnProps) => {
  // const addNewBlock = () => {

  // }

  return (
    <NuPane.Custom activeSidePane={<BlockLibrary />}>
      <div className={style.option}>
        <div className={style.optionLabel}>
          <h4>{label}</h4>
          <AddIcon onClick={addBlock} />
        </div>
        {/* @TODO: replace null with empty state */}
        {blocks ? <div className={style.blockWell}>{/* {blocks.map(() => {})} */}</div> : null}
      </div>
    </NuPane.Custom>
  )
}

export default BlockList
