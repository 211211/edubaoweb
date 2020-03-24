// @ts-nocheck
import React from 'react'
import { Collapse } from 'components'
import Base from '../Base'

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
)

const panels = [
  {
    header: 'panel1',
    key: '1',
    content: <div>{text}</div>
  },
  {
    header: 'panel2',
    key: '2',
    content: <div>{text}</div>
  },
  {
    header: 'panel3',
    key: '3',
    content: <div>{text}</div>
  },
]

const options = {
  name: 'Collapse',
  description: 'Collapse',
  usage:
    'Collapse',
  examples: [
    {
      label: 'Default',
      value: <Collapse panels={panels} activeKey={['1', '2']} />,
    },
  ],
}
export default () => <Base {...options} />
