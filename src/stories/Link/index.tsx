// @ts-nocheck
import React from 'react'

import {Link} from 'components'
import Base from '../Base'

const options = {
  name: 'Link',
  description: 'To open an url.',
  usage:
    'A link means an operation (or a series of operations). Clicking a link will redirect you to another url.',
  examples: [
    {
      label: 'Default',
      value: <Link href='https://ant.design/docs/react/introduce'>This is the default link</Link>,
    },
  ],
}
export default () => <Base {...options} />
