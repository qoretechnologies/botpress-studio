import React, { FC } from 'react'

import Custom from './Custom'
import Divider from './Divider'
import style from './style.scss'
import Text from './Text'
import Title from './Title'

interface OwnProps {}

interface NuPaneSubComponents {
  Custom: typeof Custom
  Divider: typeof Divider
  Text: typeof Text
  Title: typeof Title
}

const NuPane: FC<OwnProps> & NuPaneSubComponents = ({ children }) => {
  return <div className={style.pane}>{children}</div>
}

NuPane.Custom = Custom
NuPane.Divider = Divider
NuPane.Text = Text
NuPane.Title = Title

export default NuPane
