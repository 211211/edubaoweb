// @ts-nocheck
import React from 'react'

import Desktop from 'components/PackageCard/Desktop'
import Mobile from 'components/PackageCard/Mobile'
import Base from '../Base'

import {BASIC, MAGNIFIED_STANDARD_PACKAGE} from './const'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/104
const options = {
  name: 'Upgrade Card',
  description: 'Desktop and Mobile version for upgrade card.',
  usage: 'Use to display extend services when upgrading package',
  examples: [
    {
      label: 'Desktop: Basic package',
      value: <Desktop {...BASIC} />,
    },
    {
      label: 'Desktop: Magnified Standard package',
      value: <Desktop {...MAGNIFIED_STANDARD_PACKAGE} />,
    },
    {
      label: 'Mobile',
      value: <Mobile {...BASIC} />,
    },
  ],
}
export default () => <Base {...options} />
