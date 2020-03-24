// @ts-nocheck
import React from 'react'

import Desktop from 'components/PackageDetailContainer/Desktop'
import Mobile from 'components/PackageDetailContainer/Mobile'
import Base from '../Base'

import { INFO } from './const'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/104
const options = {
  name: 'Compact package detail container',
  description: 'Desktop and Mobile version for Compact package.',
  usage: 'Use to display a compact version for package detail container',
  examples: [
    {
      label: 'Desktop',
      value: <Desktop {...INFO} />,
    },
    {
      label: 'Mobile',
      value: <Mobile {...INFO} compact={false} />,
    },
  ],
}

export default () => <Base {...options} />
