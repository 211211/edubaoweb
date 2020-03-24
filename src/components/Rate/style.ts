import styled from 'styled-components'
import {Rate} from 'antd'

import {size as sizes, spacing} from 'themes'

interface IRate {
  platform: string
}

const setStyle = ({platform}: IRate): string => {
  const size = sizes[platform].star
  const space = spacing[platform].star

  return `
    .ant-rate-star:not(:last-child) {
      margin-right: ${space};
    }
    .anticon-star {
      font-size: ${size};
    }
  `
}

export const RateStyled = styled(Rate)<IRate>`
  ${setStyle}
`