import {Input} from 'antd'
import styled from 'styled-components'

import {boxShadow, typography, color, size, spacing} from 'themes'
import {dimension} from 'utils'

interface IInput {
  readonly width?: number
}

const {fontSize, lineHeight} = typography

const setStyle = (props: any): string => {
  const {width} = props
  const platform = dimension.getName(width)

  return `
    box-shadow: ${boxShadow.input};
    font-size: ${fontSize[platform].actionText};
    line-height: ${lineHeight[platform].actionText};
    height: ${size[platform].input};
    padding: ${spacing[platform].inputPadding};
  `
}

export const Wrapper = styled(Input)<IInput>`
  && {
    ${setStyle}
    border: none;
    &&::placeholder {
      color: ${color.fontBlue};
    }
  }
`
