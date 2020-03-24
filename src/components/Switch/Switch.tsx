import React from 'react'
import { ISwitch } from './Switch.props'
import {
  Container,
  RadioButton,
} from './style'

const Switch = ({
  name = '',
  disabled = false,
  defaultValue = '',
  selectedValue = '',
  onChange,
  options = [],
  ...rest
}: ISwitch) => (
    <Container
      {...rest}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
    >
      {
        options.map((item: any) => (
          <RadioButton
            key={item.value}
            {...item}
            checked={selectedValue === item.value}
          >
            {item.label}
          </RadioButton>
        ))
      }
    </Container>
  )

export default Switch