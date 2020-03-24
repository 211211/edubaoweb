import React from 'react'

import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'
import {INFO} from './const'

const LogosArticles = (info: ILogosArticles) => (
  <ResponsiveLayout
    mobileView={<Mobile {...info} />}
    desktopView={<Desktop {...info} />}
  />
)

LogosArticles.defaultProps = INFO

export default LogosArticles
