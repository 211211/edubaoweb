// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import Switch from 'components/Switch'
import Base from '../Base'

const Container = styled.div`
  width: 400px;
`

const onChange = (value: any) => {
  console.log({ value })
}

const radioButtons = [{
  label: 'Yes',
  value: '1',
}, {
  label: 'No',
  value: '0',
}]

const props = {
  onChange,
  name: 'test',
  selectedValue: '0',
  options: radioButtons,
}

const options = {
  name: 'Switch',
  description: 'Switch',
  usage:
    'Switch',
  examples: [
    {
      label: 'Default Switch (Horizontally)',
      value: <Container><Switch {...props} /></Container>,
    },
  ],
}
export default () => <Base {...options} />
