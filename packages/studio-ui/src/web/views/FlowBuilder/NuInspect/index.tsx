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

const BlockList = () => {}

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

// const NodePanel = () => {
//   return (
//     <div className={style.inspectorWindow}>
//       <div className={style.optionsHeader}>
//         {/* Node Name */}
//         <h3>Fake Node</h3>
//         {/* Node Description */}
//         <p>This is a node or a skill</p>
//       </div>

//       <div className={style.options}>
//         {/* On Enter */}
//         <div className={style.option}>
//           <div className={style.optionLabel}>
//             <h4>On Enter</h4>
//             <AddIcon />
//           </div>
//           <div className={style.blockWell}>
//             <Block />
//           </div>
//         </div>
//         {/* On Receive */}
//         <div className={style.option}>
//           <div className={style.optionLabel}>
//             <h4>On Receive</h4>
//             <AddIcon />
//           </div>
//           <div className={style.blockWell}>
//             <Block />
//           </div>
//         </div>
//         {/* Transitions */}
//         <div className={style.option}>
//           <div className={style.optionLabel}>
//             <h4>Transitions</h4>
//             <AddIcon />
//           </div>
//           <div className={style.blockWell}>
//             <Block />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

const Label = () => {
  return (
    <div className={style.label}>
      <h4>
        <span id={style.text}>Message</span>
        <span id={style.req}>&nbsp;*</span>
      </h4>
      <DynamicInputButton />
    </div>
  )
}

const Msg = ({ msg }) => {
  const [active, setActive] = useState(false)
  const menuRef: RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    const clickListener = (event) => {
      if (event.target !== menuRef.current) {
        setActive(false)
      }
    }

    if (active) {
      window.addEventListener('click', clickListener)
    }

    return () => {
      window.removeEventListener('click', clickListener)
    }
  }, [active, setActive, menuRef])
  return (
    <div className={style.msg}>
      <span>{msg}</span>
      <div className={style.blockOptions}>
        <OptionButton
          onClick={() => {
            setActive(!active)
          }}
        />

        {active ? <DropdownMenu ref={menuRef} /> : null}
      </div>
    </div>
  )
}

const Messages = () => {
  const msgsTmp: Array<string> = [
    // 'jghjg', 'kiguyg'
  ]
  return (
    <div className={style.msgComponent}>
      {/* Label, tooltip on hover, required | super input */}
      <Label />
      {/* wrapper */}
      <div className={style.messages}>
        {/* Message Box and plus button */}
        <div className={style.messageHeader}>
          <p>Click to add message</p>
          <AddIcon />
        </div>

        {/* Message Container */}
        <div className={style.messageContainer}>
          {msgsTmp.length ? (
            msgsTmp.map((x, index) => <Msg msg={x} key={index} />)
          ) : (
            <div className={style.placeholderText}>1 message required</div>
          )}
        </div>
      </div>

      {/* 1 message required  */}
    </div>
  )
}

const InspectorPanel = () => {
  return (
    <div className={style.inspectorWindow}>
      <div className={style.optionsHeader}>
        {/* Block Type | Content ID */}
        <div className={style.blockLabel}>
          <h3>Text</h3>
          <h3>&nbsp;|&nbsp;</h3>
          <span>#!builing_card-######</span>
        </div>
        {/* Block Description */}
        <p>A regular text message with optional indicators and alternates</p>
      </div>

      {/* Block Options */}
      <div className={style.options}>
        <Messages />
      </div>
    </div>
  )
}

// 3 Dots svg
const OptionButton = ({ onClick }) => {
  return (
    <div className={style.optionButton} onClick={onClick}>
      <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2" r="2" fill="#111418" />
        <circle cx="10" cy="2" r="2" fill="#111418" />
        <circle cx="18" cy="2" r="2" fill="#111418" />
      </svg>
    </div>
  )
}

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

// const AddIcon = () => {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 18 18"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ height: 1.8 + 'rem' }}
//       className={style.add}
//     >
//       <rect x="0.612488" y="0.591797" width="16.8875" height="16.8169" rx="3.5" fill="white" stroke="#0070F7" />
//       <path
//         d="M13.3801 7.9358H9.99611V4.5518H8.12411V7.9358H4.74011V9.8078H8.12411V13.1918H9.99611V9.8078H13.3801V7.9358Z"
//         fill="#0070F7"
//       />
//     </svg>
//   )
// }

// // Drag & Drop Grabber svg
// const Grabber = () => {
//   return (
//     <svg
//       width="14"
//       height="21"
//       viewBox="0 0 14 21"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ height: 1.6 + 'rem' }}
//       className={style.grabber}
//     >
//       <path
//         d="M2.46115 4.92072C3.82041 4.92072 4.9223 3.81918 4.9223 2.46036C4.9223 1.10154 3.82041 0 2.46115 0C1.10189 0 0 1.10154 0 2.46036C0 3.81918 1.10189 4.92072 2.46115 4.92072Z"
//         fill="#ABB3BF"
//       />
//       <path
//         d="M10.5862 4.92072C11.9454 4.92072 13.0473 3.81918 13.0473 2.46036C13.0473 1.10154 11.9454 0 10.5862 0C9.22689 0 8.125 1.10154 8.125 2.46036C8.125 3.81918 9.22689 4.92072 10.5862 4.92072Z"
//         fill="#ABB3BF"
//       />
//       <path
//         d="M2.46115 12.6805C3.82041 12.6805 4.9223 11.5789 4.9223 10.2201C4.9223 8.8613 3.82041 7.75977 2.46115 7.75977C1.10189 7.75977 0 8.8613 0 10.2201C0 11.5789 1.10189 12.6805 2.46115 12.6805Z"
//         fill="#ABB3BF"
//       />
//       <path
//         d="M10.5862 12.6805C11.9454 12.6805 13.0473 11.5789 13.0473 10.2201C13.0473 8.8613 11.9454 7.75977 10.5862 7.75977C9.22689 7.75977 8.125 8.8613 8.125 10.2201C8.125 11.5789 9.22689 12.6805 10.5862 12.6805Z"
//         fill="#ABB3BF"
//       />
//       <path
//         d="M2.46115 20.4559C3.82041 20.4559 4.9223 19.3544 4.9223 17.9955C4.9223 16.6367 3.82041 15.5352 2.46115 15.5352C1.10189 15.5352 0 16.6367 0 17.9955C0 19.3544 1.10189 20.4559 2.46115 20.4559Z"
//         fill="#ABB3BF"
//       />
//       <path
//         d="M10.5862 20.4559C11.9454 20.4559 13.0473 19.3544 13.0473 17.9955C13.0473 16.6367 11.9454 15.5352 10.5862 15.5352C9.22689 15.5352 8.125 16.6367 8.125 17.9955C8.125 19.3544 9.22689 20.4559 10.5862 20.4559Z"
//         fill="#ABB3BF"
//       />
//     </svg>
//   )
// }

const DynamicInputButton = () => {
  return (
    <svg
      style={{ height: 1.6 + 'rem' }}
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style.dynamicInputButton}
    >
      <path
        d="M4.91902 2.418H6.08102V0.99H4.82102C2.98702 0.99 2.03502 1.788 2.03502 3.342C2.03502 3.706 2.07702 4 2.11902 4.294C2.16102 4.588 2.21702 4.896 2.21702 5.274C2.21702 6.058 1.89502 6.338 0.999023 6.338H0.159024V7.738H0.999023C1.89502 7.738 2.21702 8.018 2.21702 8.802C2.21702 9.18 2.17502 9.488 2.11902 9.782C2.06302 10.076 2.03502 10.37 2.03502 10.734C2.03502 12.288 2.98702 13.086 4.82102 13.086H6.08102V11.658H4.91902C4.06502 11.658 3.68702 11.35 3.68702 10.678C3.68702 10.314 3.71502 9.992 3.75702 9.67C3.79902 9.348 3.81302 9.026 3.81302 8.69C3.81302 7.752 3.35102 7.164 2.44102 7.052V7.024C3.35102 6.912 3.81302 6.324 3.81302 5.386C3.81302 5.05 3.78502 4.728 3.75702 4.406C3.72902 4.084 3.68702 3.762 3.68702 3.398C3.68702 2.726 4.06502 2.418 4.91902 2.418ZM14.461 11L12.025 7.486L14.321 4.14H12.459L11.129 6.184L9.70101 4.14H7.69901L9.99501 7.444L7.55901 11H9.42101L10.891 8.746L12.459 11H14.461ZM21.007 6.338C20.111 6.338 19.789 6.058 19.789 5.274C19.789 4.896 19.831 4.588 19.887 4.294C19.943 4 19.971 3.706 19.971 3.342C19.971 1.788 19.019 0.99 17.185 0.99H15.925V2.418H17.087C17.941 2.418 18.319 2.726 18.319 3.398C18.319 3.762 18.291 4.084 18.249 4.406C18.207 4.728 18.193 5.05 18.193 5.386C18.193 6.324 18.655 6.912 19.565 7.024V7.052C18.655 7.164 18.193 7.752 18.193 8.69C18.193 9.026 18.221 9.348 18.249 9.67C18.277 9.992 18.319 10.314 18.319 10.678C18.319 11.35 17.941 11.658 17.087 11.658H15.925V13.086H17.185C19.019 13.086 19.971 12.288 19.971 10.734C19.971 10.37 19.929 10.076 19.887 9.782C19.845 9.488 19.789 9.18 19.789 8.802C19.789 8.018 20.111 7.738 21.007 7.738H21.847V6.338H21.007Z"
        fill="#828282"
      />
    </svg>
  )
}

// const TabsBar = () => {
//   return <div className={style.else}> hello</div>

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
