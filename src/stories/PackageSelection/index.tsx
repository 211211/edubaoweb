// @ts-nocheck
import React from 'react'

import Desktop from 'components/PackageSelection/Desktop'
import Mobile from 'components/PackageSelection/Mobile'
import Base from '../Base'

import {INFO} from './const'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/104
const options = {
  name: 'Package selection',
  description: 'Desktop and Mobile version for Package selection.',
  usage: 'Use to display packages that users are able to choose',
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
