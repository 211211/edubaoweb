import React from 'react'
import { Radio } from 'components'
import { IRadio } from '../Radio/Radio.props'
import { IRadioGroup } from './RadioGroup.props'
import {
  RadioGroupContainer,
} from './style'

const RadioGroup = (props: IRadioGroup) => {
  const {
    selectedValue,
    onChange,
    options,
    direction = 'row',
    ...rest
  } = props
  return (
    <RadioGroupContainer
      direction={direction}
      {...rest}
    >
      {
        options.map((radioProps: IRadio) => {
          return (
            <Radio
              {...radioProps}
              key={radioProps.value}
              checked={selectedValue === radioProps.value}
              // tslint:disable-next-line: jsx-no-lambda
              onChange={() => onChange(radioProps.value)}
            />
          )
        })
      }
    </RadioGroupContainer>
  )
}

export default RadioGroup
