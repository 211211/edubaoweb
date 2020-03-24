const xs: number = 480
const sm: number = 576
const md: number = 768
const lg: number = 992
const xl: number = 1200
const xxl: number = 1600

const breakpoint: IBreakpoint = {
  xsMin: xs,
  smMin: sm,
  mdMin: md,
  lgMin: lg,
  xlMin: xl,
  xxlMin: xxl,
  xsMax: sm - 1,
  smMax: md - 1,
  mdMax: lg - 1,
  lgMax: xl - 1,
  xlMax: xxl - 1,
}

export default breakpoint
