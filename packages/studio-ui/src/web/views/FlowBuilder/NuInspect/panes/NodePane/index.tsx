import React from 'react'

import NuPane from '../../NuPane'
import BlockList from './BlockList'

import style from './style.scss'

const NodePane = () => {
  return (
    <NuPane>
      {/* Node Name */}
      {/* Node Description */}
      <NuPane.Title />
      <NuPane.Divider />
      <NuPane.Text />

      {/* On Enter */}
      <BlockList label="On Enter" addBlock={console.log} />
      {/* On Receive */}
      <BlockList label="On Receive" addBlock={console.log} />
      {/* Transitions */}
      <div className={style.option}>
        <div className={style.optionLabel}>
          <h4>Transitions</h4>
          {/* <AddIcon /> */}
        </div>
        <div className={style.blockWell}>{/* <Block /> */}</div>
      </div>
    </NuPane>
  )
}

export default NodePane
