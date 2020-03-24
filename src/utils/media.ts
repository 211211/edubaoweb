import {breakpoint} from 'themes'

const {xsMax, smMax, mdMax, lgMax, xlMax} = breakpoint

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

const media = {
  mobile: customMediaQuery(xsMax),
  tablet: customMediaQuery(smMax),
  desktop: customMediaQuery(mdMax),
  wide: customMediaQuery(lgMax),
  large: customMediaQuery(xlMax),
  custom: customMediaQuery,
}

export default media
