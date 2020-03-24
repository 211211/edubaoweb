import React from 'react'

import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'
import {INFO} from './const'

const Gallery = (info: IGallery) => (
  <ResponsiveLayout
    mobileView={<Mobile {...info} />}
    desktopView={<Desktop {...info} />}
  />
)

Gallery.defaultProps = INFO

export default Gallery