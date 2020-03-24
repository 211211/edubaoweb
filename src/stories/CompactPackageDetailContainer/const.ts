import background from './images/background.jpeg'
import icon from './images/financesolution.svg'
import logo from './images/logo.svg'
import { color } from 'themes'

const SAMPLE_SERVICES = [{
  backgroundImageUrl: background,
  subHeadLine: 'Edubao Services',
  subHeadLineIcon: icon,
  headline: 'Current Account',
  description: 'EDUBAO provides hand-on emergency care in any situation.',
}, {
  backgroundImageUrl: background,
  subHeadLine: 'Edubao Services',
  subHeadLineIcon: icon,
  headline: 'Liability Insurance',
  description: 'EDUBAO provides hand-on emergency care in any situation.',
}, {
  backgroundImageUrl: background,
  subHeadLine: 'Edubao Services',
  subHeadLineIcon: icon,
  headline: 'Accident Insurance',
  description: 'EDUBAO provides hand-on emergency care in any situation.',
}, {
  backgroundImageUrl: background,
  subHeadLine: 'Edubao Services',
  subHeadLineIcon: icon,
  headline: 'Migration Office Registration',
  description: 'EDUBAO provides hand-on emergency care in any situation.',
}, {
  backgroundImageUrl: background,
  subHeadLine: 'Edubao Services',
  subHeadLineIcon: icon,
  headline: 'First Week Orientation',
  description: 'EDUBAO provides hand-on emergency care in any situation.',
}]

const buttonText = `Selected: Elite for + 500 € / month`

export const INFO = {
  background: color.iceBlue,
  buttonBackground: '#ffffff',
  buttonColor: '#0D507A',
  logo,
  color: '#0D507A',
  price: 500,
  currency: '€',
  subscription: 'month',
  name: 'Elite',
  description: 'Description sentence.',
  services: SAMPLE_SERVICES,
  compact: true,
  buttonText,
}