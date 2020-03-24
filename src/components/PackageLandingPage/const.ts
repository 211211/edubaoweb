import background from './images/background.svg'
import foreground from './images/foreground.svg'
import backgroundMobile from './images/backgroundMobile.svg'

const onClick = () => {
  // tslint:disable-next-line: no-console
  console.log('Clicked!')
}

export const INFO = {
  headline: 'We believe in all-in-one.',
  description:
    'We provide all mandatory insurances you need for visa application. Apply, get your confirmation and be secure.',
  note: `Don't have a smartphone? <a href="#">Register here</a>.`,
  icons: {
    background,
    foreground,
    backgroundMobile
  },
  buttonText: 'Get your package in the app',
  onClick,
}
