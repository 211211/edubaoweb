import React from 'react'
import {
  StyledSelect,
} from './style'

const Component = ({
  options = [],
  ...rest
}: any) => (
    <StyledSelect
      options={options}
      {...rest}
    />
  )

export default Component
