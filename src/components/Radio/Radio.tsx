import React from 'react'
import { IRadio } from './Radio.props'
import {
  Container,
  IconContainer,
  LabelContainer
} from './style'

const Radio = ({
  value = '',
  label = '',
  checked = false,
  checkedIcon = '',
  unCheckedIcon = '',
  onClick,
  ...rest
}: IRadio) => (
    <Container {...rest}>
      <IconContainer
      >
        <img
          src={
            checked ? checkedIcon : unCheckedIcon
          }
          alt={`${checked ? 'checkedIcon' : 'unCheckedIcon'}`}
        />
      </IconContainer>
      <LabelContainer
        onClick={
          // tslint:disable-next-line: jsx-no-lambda
          () => onClick(value)
        }
      >
        <span>{label}</span>
      </LabelContainer>
    </Container>
  )

export default Radio