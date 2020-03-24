// @ts-nocheck
import React from 'react'

import Desktop from 'components/HeaderBox/Desktop'
import Mobile from 'components/HeaderBox/Mobile'
import Base from '../Base'

import { INFO } from './const'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/119
const options = {
  name: 'Header Box Component',
  description: 'Desktop and Mobile version for header box.',
  usage: 'Header Box',
  examples: [
    {
      label: 'Desktop',
      value: <Desktop {...INFO} />,
    },
    {
      label: 'Desktop with long text',
      value: <Desktop {...INFO} description={`
      We want to enable young people to get the 
      international education they need and want, 
      bring cultures together and help our customers 
      to grow into successful and happy global citizens. 
      Our purpose includes the families, whose most 
      cherished ambition is to see their children become educated.
      `} />,
    },
    {
      label: 'Mobile',
      value: <Mobile {...INFO} />,
    },
  ],
}
export default () => <Base {...options} />
