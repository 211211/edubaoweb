import React from 'react'

import ResponsiveLayout from '../ResponsiveLayout'
import Desktop from './Desktop'
import Mobile from './Mobile'
import {INFO} from './const'

const TextArticle = (props: any) => (
  <ResponsiveLayout
    mobileView={<Mobile {...props} />}
    desktopView={<Desktop {...props} />}
  />
)

TextArticle.defaultProps = INFO

export default TextArticle
