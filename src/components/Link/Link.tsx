import React from 'react'

import {Wrapper} from './style'

const Link = (props: any) => {
  const {color, children, ...rest} = props

  return (
    <Wrapper
      color={color}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default Link
