import {breakpoint as breakpoints} from 'themes'
import {useWindowDimensions} from '../WindowDimensionsProvider'

interface IResponsiveLayout {
  breakpoint?: number
  mobileView: React.ReactElement
  desktopView: React.ReactElement
}

const ResponsiveLayout = (props: IResponsiveLayout) => {
  const {breakpoint = breakpoints.xsMax, mobileView, desktopView} = props
  const {width} = useWindowDimensions()

  return width > breakpoint ? desktopView : mobileView
}

export default ResponsiveLayout
