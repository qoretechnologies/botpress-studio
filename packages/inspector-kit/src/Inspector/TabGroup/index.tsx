import React, { useState, useCallback, FC } from 'react'

import style from './style.scss'
import Tab, { TabOnClick } from './Tab'

interface OwnProps {
  onChange?: any
}

const TabGroup: FC<OwnProps> = ({ children, onChange }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  // useEffect()
  const handleTabClick: TabOnClick = useCallback(
    (id, idx, e) => {
      setSelectedTab(idx)
      onChange(id)
    },
    [setSelectedTab, onChange]
  )

  return (
    <div className={style.tabs}>
      <div className={style.contextTab}>
        {React.Children.map(children, (child, idx) => {
          if (idx === 0 && React.isValidElement(child)) {
            return React.cloneElement(child, { active: selectedTab === idx, idx, onClick: handleTabClick })
          }
        })}
        <div className={style.tabsFadeOut} />
      </div>
      <div className={style.contentTabs}>
        {React.Children.map(children, (child, idx) => {
          if (idx > 0 && React.isValidElement(child)) {
            return React.cloneElement(child, { active: selectedTab === idx, idx, onClick: handleTabClick })
          }
        })}
      </div>
    </div>
  )
}

export { TabGroup, Tab }
