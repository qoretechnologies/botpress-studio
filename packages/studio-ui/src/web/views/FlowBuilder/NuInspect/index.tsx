// import { Button, Icon, Intent, Popover, Position, Tag, Tooltip } from '@blueprintjs/core'
// import { lang } from 'botpress/shared'
// import { FlowMutex } from 'common/typings'
import { Tab, Tabs } from '@blueprintjs/core'
import _ from 'lodash'
import React, { FC, Fragment } from 'react'
import { connect } from 'react-redux'
// import { getCurrentFlow } from '~/reducers'

import style from './style.scss'

interface OwnProps {}

const NodePanel = () => {
  return <div className={style.else}> hello</div>
}
const InspectorPanel = () => {
  return <div className={style.else}> hello</div>
}

// const TabsBar = () => {
//   return <div className={style.else}> hello</div>
// }

const NuInspect: FC<OwnProps> = (props) => {
  return (
    <div className={style.container}>
      <Tabs id="TabsExample" onChange={console.log} selectedTabId="ng">
        <Tab id="ng" title="Angular" panel={<NodePanel />} />
        <Tab id="mb" title="Ember" panel={<InspectorPanel />} />
      </Tabs>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // flowProblems: state.flows.flowProblems,
  // currentFlow: getCurrentFlow(state)
})

export default connect(mapStateToProps)(NuInspect)
