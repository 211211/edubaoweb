// @ts-nocheck
import React from 'react'

import Desktop from 'components/Search/Desktop'
import Mobile from 'components/Search/Mobile'
import Base from '../Base'

import { INFO } from './const'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/119
const options = {
  name: 'Search Component',
  description: 'Desktop and Mobile version for search box.',
  usage: 'Search for content',
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
