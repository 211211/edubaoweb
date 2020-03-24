import {Input} from 'antd'
import React from 'react'

import {useWindowDimensions} from '../WindowDimensionsProvider'
import {Wrapper} from './style'

const {Group, TextArea, Search, Password} = Input
const CustomInput = (props: any) => {
  const {width} = useWindowDimensions()

  return <Wrapper width={width} {...props} />
}

CustomInput.Group = Group
CustomInput.TextArea = TextArea
CustomInput.Search = Search
CustomInput.Password = Password

export default CustomInput
