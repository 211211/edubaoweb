// @ts-nocheck
import React from 'react'

import Desktop from 'components/UpgradeCard/Desktop'
import Mobile from 'components/UpgradeCard/Mobile'
import Base from '../Base'

import {INFO} from './const'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/104
const options = {
  name: 'Upgrade Card',
  description: 'Desktop and Mobile version for upgrade card.',
  usage: 'Use to display extend services when upgrading package',
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
