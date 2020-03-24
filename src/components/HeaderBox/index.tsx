import React from 'react'
import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Component = (props: any) => (
  <ResponsiveLayout
    mobileView={<Mobile {...props} />}
    desktopView={<Desktop {...props} />}
  />
)

export default Component
