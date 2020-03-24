// @ts-nocheck
import React from 'react'

import Desktop from 'components/Menu/Desktop'
import Mobile from 'components/Menu/Mobile'
import Base from '../Base'

const options = {
  name: 'Menu',
  description: 'A responsive menu of the web page.',
  usage: 'Use as the menu of the page.',
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
