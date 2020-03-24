// @ts-nocheck
import React from 'react'

import Desktop from 'components/HeadLineAndText/Desktop'
import Mobile from 'components/HeadLineAndText/Mobile'
import Base from '../Base'

import { INFO } from './const'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/119
const options = {
  name: 'Headline and text component',
  description: 'Desktop and Mobile version for headline and text.',
  usage: 'Display a paragraph',
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
