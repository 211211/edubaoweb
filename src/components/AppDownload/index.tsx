import React from 'react'

import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'
import {INFO} from './const'

const AppDownload = (info: IAppDownload) => (
  <ResponsiveLayout
    mobileView={<Mobile {...info} />}
    desktopView={<Desktop {...info} />}
  />
)

AppDownload.defaultProps = INFO

export default AppDownload
