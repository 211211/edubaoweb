import {Button} from 'antd'
import React from 'react'

import {useWindowDimensions} from '../WindowDimensionsProvider'
import {Wrapper} from './style'

const CustomButton = (props: any) => {
  const {width} = useWindowDimensions()
  const {color, background, border, children, ...rest} = props

  return (
    <Wrapper
      color={color}
      background={background}
      border={border}
      width={width}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

CustomButton.Group = Button.Group

export default CustomButton
