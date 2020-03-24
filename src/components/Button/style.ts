import {Button} from 'antd'
import styled from 'styled-components'

import {color as colors, spacing, typography, size} from 'themes'
import {dimension} from 'utils'

interface IButton {
  readonly color?: string
  readonly background?: string
  readonly border?: string
  readonly width?: number
}

const {fontSize, lineHeight} = typography

const setStyle = (props: any): string => {
  const {color, background, border, width} = props
  const platform = dimension.getName(width)
  let colorStyle = ''
  let bgColorStyle = ''
  let borderColorStyle = 'border: none;'

  if (color) {
    colorStyle = `color: ${color};`
  }

  if (background) {
    if (!color) {
      colorStyle = `color: ${colors.white};`
    }
    bgColorStyle = `background-color: ${background};`
  }

  if (border) {
    borderColorStyle = `
      border: 2px solid ${border};
      background-color: transparent;
      color: ${colors.mainBlue};
    `
  }

  return `
    ${colorStyle}
    ${bgColorStyle}
    ${borderColorStyle}
    padding: ${spacing[platform].buttonPadding};
    font-size: ${fontSize[platform].actionText};
    line-height: ${lineHeight[platform].actionText};
    height: ${size[platform].input};
  `
}

export const Wrapper = styled(Button)<IButton>`
  && {
    ${setStyle}
    font-weight: bold;
    &&:not([disabled]):hover {
      opacity: 0.75;
    }
    .ant-btn-circle,
    &&.ant-btn-link {
      padding: 0;
    }
  }
`
