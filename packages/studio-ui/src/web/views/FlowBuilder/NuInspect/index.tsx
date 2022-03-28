// import { Button, Icon, Intent, Popover, Position, Tag, Tooltip } from '@blueprintjs/core'
// import { lang } from 'botpress/shared'
// import { FlowMutex } from 'common/typings'
import { Tab, Tabs } from '@blueprintjs/core'
import _ from 'lodash'
import React, { FC, Fragment, forwardRef, RefObject, useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
// import { getCurrentFlow } from '~/reducers'

import style from './style.scss'

interface OwnProps {}

const BlockPanel = () => {}

const Block = () => {
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
    <div className={style.block}>
      <Grabber />
      <div className={style.content}>
        <span>Type | #builtin_type-#####</span>
        <div className={style.blockOptions}>
          <OptionButton
            onClick={() => {
              setActive(!active)
            }}
          />

          {active ? <DropdownMenu ref={menuRef} /> : null}
        </div>
      </div>
    </div>
  )
}

const NodePanel = () => {
  return (
    <div className={style.nodeInspector}>
      {/* Node Name */}
      {/* Node Description */}
      <div className={style.optionsHeader}>
        <input type="text" value="SuperNode" className={style.nodeName} />
        <p>This is a node or a skill</p>
      </div>

      <div className={style.options}>
        {/* On Enter */}
        <div className={style.option}>
          <div className={style.optionLabel}>
            <h4>On Enter</h4>
            <AddIcon />
          </div>
          <div className={style.blockWell}>
            <Block />
          </div>
        </div>
        {/* On Receive */}
        <div className={style.option}>
          <div className={style.optionLabel}>
            <h4>On Receive</h4>
            <AddIcon />
          </div>
          <div className={style.blockWell}>
            <Block />
          </div>
        </div>
        {/* Transitions */}
        <div className={style.option}>
          <div className={style.optionLabel}>
            <h4>Transitions</h4>
            <AddIcon />
          </div>
          <div className={style.blockWell}>
            <Block />
          </div>
        </div>
      </div>
    </div>
  )
}
const InspectorPanel = () => {
  return (
    <div className={style.blockInspector}>
      {/* Block Type | Content ID */}
      {/* Block Description */}

      {/* Block Options */}

      <div className={style.nodeOptions}>
        {/* Node Name */}
        {/* Node Description */}
        <div className={style.optionsHeader}>
          <span className={style.blockLabel}>
            <h3>Card |</h3>
            <span>#!builing_card-######</span>
          </span>
          <p></p>
        </div>

        <div className={style.options}>{/* OPTIONS */}</div>
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

const DropdownMenu = forwardRef((_, ref: RefObject<HTMLDivElement>) => {
  return (
    <div ref={ref} className={style.optionMenu}>
      <span
        onClick={() => {
          console.log('DUPLICATE')
        }}
      >
        Duplicate
      </span>
      <span
        className="delete"
        onClick={() => {
          console.log('DELETE')
        }}
      >
        Delete
      </span>
    </div>
  )
})

const AddIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.612488" y="0.591797" width="16.8875" height="16.8169" rx="3.5" fill="white" stroke="#0070F7" />
      <path
        d="M13.3801 7.9358H9.99611V4.5518H8.12411V7.9358H4.74011V9.8078H8.12411V13.1918H9.99611V9.8078H13.3801V7.9358Z"
        fill="#0070F7"
      />
    </svg>
  )
}

// Drag & Drop Grabber svg
const Grabber = () => {
  return (
    <svg
      width="14"
      height="21"
      viewBox="0 0 14 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: 1.6 + 'rem' }}
      className={style.grabber}
    >
      <path
        d="M2.46115 4.92072C3.82041 4.92072 4.9223 3.81918 4.9223 2.46036C4.9223 1.10154 3.82041 0 2.46115 0C1.10189 0 0 1.10154 0 2.46036C0 3.81918 1.10189 4.92072 2.46115 4.92072Z"
        fill="#ABB3BF"
      />
      <path
        d="M10.5862 4.92072C11.9454 4.92072 13.0473 3.81918 13.0473 2.46036C13.0473 1.10154 11.9454 0 10.5862 0C9.22689 0 8.125 1.10154 8.125 2.46036C8.125 3.81918 9.22689 4.92072 10.5862 4.92072Z"
        fill="#ABB3BF"
      />
      <path
        d="M2.46115 12.6805C3.82041 12.6805 4.9223 11.5789 4.9223 10.2201C4.9223 8.8613 3.82041 7.75977 2.46115 7.75977C1.10189 7.75977 0 8.8613 0 10.2201C0 11.5789 1.10189 12.6805 2.46115 12.6805Z"
        fill="#ABB3BF"
      />
      <path
        d="M10.5862 12.6805C11.9454 12.6805 13.0473 11.5789 13.0473 10.2201C13.0473 8.8613 11.9454 7.75977 10.5862 7.75977C9.22689 7.75977 8.125 8.8613 8.125 10.2201C8.125 11.5789 9.22689 12.6805 10.5862 12.6805Z"
        fill="#ABB3BF"
      />
      <path
        d="M2.46115 20.4559C3.82041 20.4559 4.9223 19.3544 4.9223 17.9955C4.9223 16.6367 3.82041 15.5352 2.46115 15.5352C1.10189 15.5352 0 16.6367 0 17.9955C0 19.3544 1.10189 20.4559 2.46115 20.4559Z"
        fill="#ABB3BF"
      />
      <path
        d="M10.5862 20.4559C11.9454 20.4559 13.0473 19.3544 13.0473 17.9955C13.0473 16.6367 11.9454 15.5352 10.5862 15.5352C9.22689 15.5352 8.125 16.6367 8.125 17.9955C8.125 19.3544 9.22689 20.4559 10.5862 20.4559Z"
        fill="#ABB3BF"
      />
    </svg>
  )
}

// const TabsBar = () => {
//   return <div className={style.else}> hello</div>
// }

const NuInspect: FC<OwnProps> = (props) => {
  return (
    <div className={style.container}>
      <Tabs id="TabsExample" onChange={console.log} selectedTabId="ng">
        <Tab id="ng" title="Node" panel={<NodePanel />} />
        <Tab id="mb" title="SomeContent" panel={<InspectorPanel />} />
      </Tabs>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // flowProblems: state.flows.flowProblems,
  // currentFlow: getCurrentFlow(state)
})

export default connect(mapStateToProps)(NuInspect)
