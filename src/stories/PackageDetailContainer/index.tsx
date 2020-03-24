// @ts-nocheck
import React from 'react'

import Desktop from 'components/PackageDetailContainer/Desktop'
import Mobile from 'components/PackageDetailContainer/Mobile'
import Base from '../Base'

import {INFO} from './const'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/104
const options = {
  name: 'Package card detail',
  description: 'Desktop and Mobile version for Package detail.',
  usage: 'Use to display information with image and a link through button',
  examples: [
    {
      label: 'Desktop',
      value: <Desktop {...INFO} />,
    },
    {
      label: 'Mobile',
      value: <Mobile {...INFO} />,
    },
  ],
}

export default () => <Base {...options} />
