import ToolSVG from './images/tool.svg'

const onCardClicked = (cardInfo: object) => {
  // tslint:disable-next-line: no-console
  console.log({ cardInfo })
}

export const INFO = {
  circleBackgroundColor: '#7ED0FC 0% 0% no-repeat padding-box;',
  icon: {
    desktop: ToolSVG,
    mobile: ToolSVG,
  },
  text: `We bring an <strong>all-in-once solution</strong> to your phone.`,
  buttonText: 'Read more',
  onClick: onCardClicked
}
