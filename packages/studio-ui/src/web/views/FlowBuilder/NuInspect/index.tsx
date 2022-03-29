// import { Button, Icon, Intent, Popover, Position, Tag, Tooltip } from '@blueprintjs/core'
// import { lang } from 'botpress/shared'
// import { FlowMutex } from 'common/typings'
import { Tab, Tabs } from '@blueprintjs/core'
import _ from 'lodash'
import React, { FC, Fragment, forwardRef, RefObject, useEffect, useState, useRef, useCallback } from 'react'
import { connect } from 'react-redux'
// import { getCurrentFlow } from '~/reducers'

import NodePane from './panes/NodePane'

import style from './style.scss'

interface OwnProps {}

const BlockPanel = () => {}

// const Block = () => {
//   const [active, setActive] = useState(false)
//   const menuRef: RefObject<HTMLDivElement> = useRef(null)

//   useEffect(() => {
//     const clickListener = (event) => {
//       if (event.target !== menuRef.current) {
//         setActive(false)
//       }
//     }

//     if (active) {
//       window.addEventListener('click', clickListener)
//     }

//     return () => {
//       window.removeEventListener('click', clickListener)
//     }
//   }, [active, setActive, menuRef])

//   return (
//     <div className={style.block}>
//       {/* <Grabber /> */}
//       <div className={style.content}>
//         <span>Type | #builtin_type-#####</span>
//         <div className={style.blockOptions}>
//           <OptionButton
//             onClick={() => {
//               setActive(!active)
//             }}
//           />

//           {active ? <DropdownMenu ref={menuRef} /> : null}
//         </div>
//       </div>
//     </div>
//   )
// }

const InspectorPanel = () => {
  return <div>knowing me knowing you its the best i can do</div>
}

// 3 Dots svg
// const OptionButton = ({ onClick }) => {
//   return (
//     <div className={style.optionButton} onClick={onClick}>
//       <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="2" cy="2" r="2" fill="#111418" />
//         <circle cx="10" cy="2" r="2" fill="#111418" />
//         <circle cx="18" cy="2" r="2" fill="#111418" />
//       </svg>
//     </div>
//   )
// }

// const DropdownMenu = forwardRef((_, ref: RefObject<HTMLDivElement>) => {
//   return (
//     <div ref={ref} className={style.optionMenu}>
//       <span
//         onClick={() => {
//           console.log('DUPLICATE')
//         }}
//       >
//         Duplicate
//       </span>
//       <span
//         className="delete"
//         onClick={() => {
//           console.log('DELETE')
//         }}
//       >
//         Delete
//       </span>
//     </div>
//   )
// })

const NuInspect: FC<OwnProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState('node')

  const onTabChange = useCallback(
    (id) => {
      console.log(id)
      setSelectedTab(id)
    },
    [setSelectedTab]
  )
  return (
    <div className={style.container}>
      <Tabs id="TabsExample" onChange={onTabChange} selectedTabId={selectedTab}>
        <Tab id="node" title="Node" panel={<NodePane />} />
        <Tab id="text" title="Text" panel={<InspectorPanel />} />
      </Tabs>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // flowProblems: state.flows.flowProblems,
  // currentFlow: getCurrentFlow(state)
})

export default connect(mapStateToProps)(NuInspect)
