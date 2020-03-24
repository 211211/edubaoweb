import React from 'react'

import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'
import {INFO} from './const'

const TextTwoLists = (info: ITextTwoLists) => (
  <ResponsiveLayout
    mobileView={<Mobile {...info} />}
    desktopView={<Desktop {...info} />}
  />
)

TextTwoLists.defaultProps = INFO

export default TextTwoLists
