import styled from 'styled-components'

import {size as sizes, spacing} from 'themes'

interface ICarousel {
  platform: string
}

const setStyle = ({platform}: ICarousel): string => {
  const size = sizes[platform].carouselArrow
  const space = spacing[platform].carouselArrow

  return `
    position: relative;
    padding: 0 ${space};
    > i {
      font-size: ${size};
      position: absolute;
      top: calc(50% - ${size});
      &:first-child {
        left: 0;
      }
      &:last-child {
        right: 0;
      }
    }
  `
}

export const Wrapper = styled.div<ICarousel>`
  ${setStyle}
`
