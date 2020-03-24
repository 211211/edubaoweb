import background from './images/background.svg'
import foreground from './images/foreground.svg'
import backgroundMobile from './images/backgroundMobile.svg'

const onClick = () => {
  // tslint:disable-next-line: no-console
  console.log('Clicked!')
}

export const INFO = {
  headline: 'Arrive with piece of mind with EDUBAO + Arrival',
  description:
    'We provide all mandatory insurances you need for visa application. Apply, get your confirmation and be secure.',
  icons: {
    background,
    foreground,
    backgroundMobile
  },
  buttonText: 'Get EDUBAO + Arrival now',
  onClick,
}
