// @ts-nocheck
import React from 'react'
import Semester from 'components/Semester'
import styled from 'styled-components'
import Base from '../Base'

const Container = styled.div`
  display: flex;
  min-width: 400px;
`

const props = {
  onIncreased: () => {
    console.log(`+ 1`)
  },
  onDecreased: () => {
    console.log(`- 1`)
  },
  value: 10,
}

const options = {
  name: 'Semester',
  description: 'Semester',
  usage:
    'Semester',
  examples: [
    {
      label: 'Default',
      value: <Container><Semester {...props} /></Container>,
    },

  ],
}
export default () => <Base {...options} />
