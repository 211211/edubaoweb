// @ts-nocheck
import React from 'react'

import {Input} from 'components'
import Base from '../Base'

const options = {
  name: 'Input',
  description:
    'A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.',
  usage: 'A user input in a form field is needed. A search input is required.',
  examples: [
    {
      label: 'Default',
      value: <Input placeholder='Type in what you’re looking for…' />,
    },
  ],
}
export default () => <Base {...options} />
