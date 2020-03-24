// @ts-nocheck
import React from 'react'

import Desktop from 'components/DatePicker/Desktop'
import Mobile from 'components/DatePicker/Mobile'
import Base from '../Base'
import {INFO} from './const'

const options = {
  name: 'DatePicker',
  description: 'To pick a date.',
  usage:
    'Date Picker',
  examples: [
    {
      label: 'Desktop',
      value: (
        <Desktop {...INFO} />
      ),
    },
    {
      label: 'Mobile',
      value: (
        <Mobile {...INFO} />
      ),
    },
  ],
}
export default () => <Base {...options} />
