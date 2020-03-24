import React from 'react'
import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Menu = () => (
  <ResponsiveLayout mobileView={<Mobile />} desktopView={<Desktop />} />
)

export default Menu
