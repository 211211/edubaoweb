// @ts-nocheck
import React, {Fragment} from 'react'
import styled from 'styled-components'

import {Button} from 'components'
import {color} from 'themes'
import Base from '../Base'

const Wrapper = styled.div`
  margin-right: 20px;
`
const options = {
  name: 'Button',
  description: 'To trigger an operation.',
  usage:
    'A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.',
  examples: [
    {
      label: 'Default',
      value: <Button>Default Button</Button>,
    },
    {
      label: 'Primary',
      value: <Button type='primary'>Primary Button</Button>,
    },
    {
      label: 'With border',
      value: <Button border={color.mainBlue}>Bordered Button</Button>,
    },
    {
      label: 'Critical',
      value: <Button type='danger'>Critical Button</Button>,
    },
    {
      label: 'Custom color',
      value: (
        <Fragment>
          <Wrapper>
            <Button background={color.green}>Green Button</Button>
          </Wrapper>
          <Wrapper>
            <Button background={color.red}>Red Button</Button>
          </Wrapper>
          <Wrapper>
            <Button background={color.blue} color={color.fontBlue}>
              Blue Button
            </Button>
          </Wrapper>
        </Fragment>
      ),
    },
    {
      label: 'Disabled',
      value: (
        <Button type='primary' disabled>
          Disabled Button
        </Button>
      ),
    },
  ],
}
export default () => <Base {...options} />
