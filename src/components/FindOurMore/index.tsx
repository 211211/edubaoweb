import React from 'react'

import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'
import {INFO} from './const'

const Component = (props: any) => (
  <ResponsiveLayout
    mobileView={<Mobile {...props} />}
    desktopView={<Desktop {...props} />}
  />
)

Component.defaultProps = INFO

export default Component
