// @ts-nocheck
import React from 'react'
// import Radio from 'components/Radio'
import RadioGroup from 'components/RadioGroup'
import Radio from 'components/Radio'
import Base from '../Base'

const onChange = (value: string | number) => {
  console.log({ value })
}

const radioButtons = [{
  label: 'Radio 1',
  name: 'test',
  value: 'radio1',
}, {
  label: 'Radio 2',
  name: 'test',
  value: 'radio2',
}, {
  label: 'Radio 3',
  name: 'test',
  value: 'radio3',
}]

const radioButton = {
  label: 'Radio 1',
  name: 'test',
  value: 'radio1',
}

const props = {
  onChange,
  selectedValue: 'radio2',
  options: radioButtons,
}

const options = {
  name: 'Radio',
  description: 'Radio',
  usage:
    'Radio',
  examples: [
    {
      label: 'Default Group (Horizontally)',
      value: <RadioGroup {...props} />,
    },
    {
      label: 'Vertically Group',
      value: <RadioGroup direction='column' {...props} />,
    },
    {
      label: 'Unchecked radio button',
      value: <Radio {...radioButton} />,
    },
    {
      label: 'Checked radio button',
      value: <Radio {...radioButton} checked={true} />,
    },
  ],
}
export default () => <Base {...options} />
