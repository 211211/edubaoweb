// @ts-nocheck
import React from 'react'
import Select from 'components/Select'
import styled from 'styled-components'
import Base from '../Base'

const Container = styled.div`
  display: flex;
  width: 800px;
`

const onChange = (value: string | number) => {
  console.log({ value })
}

const data = [{
  label: 'Option 1',
  disabled: false,
  value: 'option1',
}, {
  label: 'Option 2',
  disabled: false,
  value: 'option2',
}, {
  label: 'Option 3',
  disabled: false,
  value: 'option3',
}]

const props = {
  onChange,
  options: data,
  placeholder: 'Select your option'
}

const options = {
  name: 'Select',
  description: 'Select',
  usage:
    'Select',
  examples: [
    {
      label: 'Default',
      value: <Container><Select {...props} /></Container>,
    },
    {
      label: 'With default value',
      value: <Container>
        <Select {...props} defaultValue={{
          label: 'Option 2',
          disabled: false,
          value: 'option2',
        }} />
      </Container>,
    },
    {
      label: 'Is multiple',
      value: <Container>
        <Select
          {...props}
          defaultValue={[{
            label: 'Option 2',
            disabled: false,
            value: 'option2',
          }, {
            label: 'Option 1',
            disabled: false,
            value: 'option1',
          }]}
          isMulti
        />
      </Container>,
    },
  ],
}
export default () => <Base {...options} />
