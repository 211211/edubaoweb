import {color} from 'themes'

import NgaAvatar from './images/Nga.png'
import Ngax2Avatar from './images/Nga@2x.png'
// import RafaelAvatar from './images/Rafael.png'
// import Rafaelx2Avatar from './images/Rafael@2x.png'

const onCardClicked = (cardInfo: object) => {
  // tslint:disable-next-line: no-console
  console.log({ cardInfo })
}

export const INFO = {
  title: 'Enrollment and Study Guidance are included in',
  cards: [
    {
      backgroundcolor: color.white,
      circleBackgroundColor: color.mainBlue,
      icon: {
        desktop: Ngax2Avatar,
        mobile: NgaAvatar,
      },
      headline: '+ Arrival',
      headlineColor: color.mainBlue,
      text: `For those on a budget`,
      textColor: color.error
    },
  ],
  buttonBackgroundColor: color.mainBlue,
  buttonText: 'Get + Arrival now',
  buttonTextColor: color.white,
  onClick: onCardClicked
}
