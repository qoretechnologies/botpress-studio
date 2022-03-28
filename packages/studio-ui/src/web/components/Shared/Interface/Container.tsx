import cx from 'classnames'
import React from 'react'
import { HotKeys } from 'react-hotkeys'
import { connect } from 'react-redux'
import SplitPane from 'react-split-pane'
import { toggleExplorer } from '~/actions'
import { RootReducer } from '~/reducers'

import style from './style.scss'
import { ContainerProps } from './typings'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps

const Container = (props: ContainerProps & StateProps & DispatchProps) => {
  const width = props.sidePanelWidth ? props.sidePanelWidth : 300

  const keyHandlers = {
    ...(props.keyHandlers || {}),
    'toggle-sidepanel': props.toggleExplorer
  }

  const children = React.Children.toArray(props.children)

  return (
    // <HotKeys handlers={keyHandlers} keyMap={props.keyMap || {}} className={style.fullsize} focused>
    <div className={style.container}>
      {/* <SplitPane
          split={'vertical'}
          defaultSize={width}
          size={props.explorerOpen ? width : 0}
          pane2Style={{ overflowX: 'auto' }}
        > */}
      {/* {children[0]} */}
      <div className={style.fullsize}>{children}</div>
      {/* </SplitPane> */}
    </div>
    // </HotKeys>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  explorerOpen: state.ui.explorerOpen
})

const mapDispatchToProps = { toggleExplorer }
export default connect(mapStateToProps, mapDispatchToProps)(Container)
