import React from 'react'

import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'
import {INFO} from './const'

const HeadlineTwoColumns = (info: IHeadlineTwoColumns) => (
  <ResponsiveLayout
    mobileView={<Mobile {...info} />}
    desktopView={<Desktop {...info} />}
  />
)

HeadlineTwoColumns.defaultProps = INFO

export default HeadlineTwoColumns
