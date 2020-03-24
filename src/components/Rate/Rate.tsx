import React from 'react'

import {dimension} from 'utils'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import {RateStyled} from './style'

const Rate = (props: any) => {
  const {width} = useWindowDimensions()
  const platform = dimension.getName(width)

  return (
    <RateStyled {...props} platform={platform} />
  )
}

export default Rate
