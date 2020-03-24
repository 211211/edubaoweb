import {Card} from 'antd'
import styled from 'styled-components'

import {boxShadow, color, radius, spacing} from 'themes'
import {dimension} from 'utils'

interface ICard {
  readonly background?: string
  readonly padding?: string
  readonly width?: number
}

const setStyle = (props: any): string => {
  const {background, padding, width} = props
  const platform = dimension.getName(width)

  return `
    background-color: ${background || color.white};
    box-shadow: ${boxShadow.card};
    border-radius: ${radius.card};
    padding: ${padding || spacing[platform].cardPadding};
  `
}

export const Wrapper = styled(Card)<ICard>`
  && {
    ${setStyle}
    border: none;
  }
`
