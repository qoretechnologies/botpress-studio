import { Checkbox } from '@blueprintjs/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { Container } from '~/components/Shared/Interface'
import { RootReducer } from '~/reducers'
import { BaseBlock, TransitionBaseBlock } from './components/blocks'
import style from './style.scss'

interface OwnProps {}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps
// type Props = DispatchProps & StateProps & OwnProps & RouteComponentProps

const tmpBlockList = {
  onEnter: [
    // { type: 'Img', id: 1, dndType: 'onEnter' },
    // { type: 'Text', id: 2, dndType: 'onEnter' },
    // { type: 'Img', id: 3, dndType: 'onEnter' }
  ],
  onReceive: [
    // { type: 'Text', id: 2, dndType: 'onReceive' },
    // { type: 'Code', id: 1, dndType: 'onReceive' }
  ],
  trans: [
    //   { content: 'always', id: 'always1', dndType: 'transition' }
  ]
}

const EditNode = (props: Props) => {
  const [blockList, setBlockList] = useState(tmpBlockList)

  // const moveBlock = useCallback(
  //   (dragIndex, hoverIndex, dndType) => {
  //     const newList = JSON.parse(JSON.stringify(blockList))
  //     newList[dndType] = update(newList[dndType], {
  //       $splice: [
  //         [dragIndex, 1],
  //         [hoverIndex, 0, newList[dndType][dragIndex]]
  //       ]
  //     })

  //     setBlockList(newList)
  //   },
  //   [blockList, setBlockList]
  // )

  return (
    <div className={style.node}>
      <h3 className={style.nodeLabel}>some_node</h3>
      <div className={style.nodeContent}>
        <div className={style.nodeBar} />
        <div className={style.nodeAction}>
          <div className={style.enterNode}>
            <div className={style.sideNode}>NODE</div>
            <span className={style.dot}></span>
          </div>
          <h4 className={style.wellLabel}>On Enter</h4>
          <div className={`${style.contentWell} ${!blockList.onEnter.length ? style.highlightBorder : ''}`}>
            {!blockList.onEnter.length ? (
              <span className={style.empty}>drag block here</span>
            ) : (
              blockList.onEnter.map(({ id, dndType, type }, index) => (
                <BaseBlock type={type} content={'asdfasdf'} id={id} dndType={dndType} key={id} index={index} />
              ))
            )}
          </div>
        </div>
        <div className={style.nodeAction}>
          <h4 className={style.wellLabel}>On Receive</h4>
          <div className={`${style.contentWell} ${!blockList.onReceive.length ? style.highlightBorder : ''}`}>
            {!blockList.onReceive.length ? (
              <div className={style.empty}>
                <span>drag block here</span>
                <Checkbox
                // checked={}
                // onChange={}
                >
                  wait for user input
                </Checkbox>
              </div>
            ) : (
              blockList.onReceive.map(({ id, dndType, type }, index) => (
                <BaseBlock type={type} content={'asdfasdf'} id={id} dndType={dndType} key={id} index={index} />
              ))
            )}
          </div>
        </div>
        <div className={style.nodeAction}>
          <h4 className={style.wellLabel}>Transitions</h4>
          <div className={`${style.contentWell} ${!blockList.trans.length ? style.highlightBorder : ''}`}>
            {!blockList.trans.length ? (
              <TransitionBaseBlock content={<span>always</span>} id="NODE" />
            ) : (
              blockList.trans.map((el, index) => <TransitionBaseBlock content={el.content} id={el.id} key={index} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const NodeEditor = (props: OwnProps) => {
  return (
    <div className={style.editView}>
      <EditNode />
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => ({})

const mapDispatchToProps = {}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(withRouter(NodeEditor))
