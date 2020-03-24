// @ts-nocheck
import React from 'react'

import Desktop from 'components/Footer/Desktop'
import Mobile from 'components/Footer/Mobile'
import Base from '../Base'

const options = {
  name: 'Footer',
  description: 'A responsive footer of the web page.',
  usage: 'Use as the footer of the page.',
  examples: [
    {
      label: 'Desktop',
      value: <Desktop />,
    },
    {
      label: 'Mobile',
      value: <Mobile />,
    },
  ],
}
export default () => <Base {...options} />
