// @ts-nocheck
import React from 'react'
import Base from '../Base'
import { Overlay } from 'components'
import {INFO} from './const'

const options = {
  name: 'Overlay',
  description: 'Overlay',
  usage:
    'Overlay',
  examples: [
    {
      label: 'Default Overlay',
      value: (
        <Overlay {...INFO} />
      ),
    },
  ],
}

export default () => <Base {...options} />
