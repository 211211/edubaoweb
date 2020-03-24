import {breakpoint} from 'themes'

const getName = (width: number) =>
  width > breakpoint.xsMax ? 'desktop' : 'mobile'

export default {
  getName,
}
