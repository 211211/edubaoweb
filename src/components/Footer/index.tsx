import React from 'react'
import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Footer = () => (
  <ResponsiveLayout mobileView={<Mobile />} desktopView={<Desktop />} />
)

export default Footer
