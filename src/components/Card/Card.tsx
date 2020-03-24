import React from 'react'

import { useWindowDimensions } from '../WindowDimensionsProvider'
import { Wrapper } from './style'

const CustomCard = (props: any) => {
  const { width } = useWindowDimensions()
  const { background, padding, children, ...rest } = props

  return (
    <Wrapper
      background={background}
      padding={padding}
      width={width}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default CustomCard
