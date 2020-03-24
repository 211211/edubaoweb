interface ITypographyProps {
  title: string
  subHeadline: string
  quote: string
  cardTitle: string
  text: string
  actionText: string
  subtext: string
  smallText: string
}

interface ITypography {
  fontSize: {
    mobile: ITypographyProps
    desktop: ITypographyProps
  }
  lineHeight: {
    mobile: ITypographyProps
    desktop: ITypographyProps
  }
}
