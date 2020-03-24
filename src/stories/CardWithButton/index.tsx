// @ts-nocheck
import React from 'react'

import Desktop from 'components/CardWithButton/Desktop'
import Mobile from 'components/CardWithButton/Mobile'
import Base from '../Base'

import {INFO} from './const'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/104
const options = {
  name: 'Card with button',
  description: 'Desktop and Mobile version for Card with button.',
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
