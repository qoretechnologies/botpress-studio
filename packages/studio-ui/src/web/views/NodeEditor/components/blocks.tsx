import React, { useState, useEffect, useRef, forwardRef, RefObject } from 'react'
import style from '../style.scss'
// import { useDrag, useDrop } from 'react-dnd'

const BaseBlock = ({ id, content, type, dndType, index }) => {
  const [active, setActive] = useState(false)
  const menuRef: RefObject<HTMLDivElement> = useRef(null)
  // const blockRef = useRef(null)

  // const [{ handlerId }, drop] = useDrop({
  //   accept: dndType,
  //   collect(monitor) {
  //     return {
  //       handlerId: monitor.getHandlerId()
  //     }
  //   },
  //   hover(item, monitor) {
  //     if (!blockRef.current) {
  //       return
  //     }

  //     const dragIndex = item.index
  //     const hoverIndex = index

  //     if (dragIndex === hoverIndex) {
  //       return
  //     }

  //     const hoverBoundingRect = blockRef.current?.getBoundingClientRect()
  //     const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
  //     const clientOffset = monitor.getClientOffset()
  //     const hoverClientY = clientOffset.y - hoverBoundingRect.top

  //     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
  //       return
  //     }

  //     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
  //       return
  //     }

  //     moveBlock(dragIndex, hoverIndex, dndType)

  //     item.index = hoverIndex
  //   }
  // })

  // const [{ isDragging }, drag] = useDrag({
  //   type: dndType,
  //   item: () => {
  //     return { id, index }
  //   },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging()
  //   })
  // })

  // const opacity = isDragging ? 0.5 : 1
  // drag(drop(blockRef))

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
      {/* Label */}
      <div className={style.blockLabel}>
        <div className={style.label}>
          <span className={style.blockName}>{type} |</span>
          <span className={style.blockID}>
            #!building_{type}-{id}
          </span>
        </div>

        <div className={style.blockOptions}>
          <OptionButton
            onClick={() => {
              setActive(!active)
            }}
          />

          {active ? <DropdownMenu ref={menuRef} /> : null}
        </div>
      </div>

      {/* Content */}
      <div className={style.blockContent}>
        <Grabber />
        <div className={style.content}>{content}</div>
      </div>
    </div>
  )
}

const TransitionBaseBlock = ({ content, id }) => {
  return (
    <div className={style.block}>
      <div className={style.transitionContent}>
        <div className={`${style.grabber} ${content === 'always' ? style.invisible : ''}`}></div>
        <div className={style.content}>{content}</div>
        <div className={style.exitNode}>
          <span className={style.dot}></span>
          <div className={style.sideNode}>{id}</div>
        </div>
      </div>
    </div>
  )
}

const TextBlock = () => {}

const ImageBlock = () => {}

const CardBlock = (content) => {}

const ExecuteCodeBlock = () => {}

// Drag & Drop Grabber svg
const Grabber = () => {
  return (
    <div className={style.grabber}>
      <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export { TextBlock, ImageBlock, CardBlock, ExecuteCodeBlock, BaseBlock, TransitionBaseBlock }
