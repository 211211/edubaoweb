import BasicPackageIcon from './images/basic.svg'
import StandardPackageIcon from './images/standard.svg'
import ElitePackageIcon from './images/elite.svg'
import CheckMarkBlue from './images/Checkmark.Blue.svg'
import CheckMarkWhite from './images/Checkmark.White.svg'
import blue_small_logo from './images/edubao_logo_blue_small_icon.svg'
import blue_large_logo from './images/edubao_logo_blue_large_icon.svg'
import white_logo from './images/white_logo.svg'
import { color } from 'themes'

const COMMON_PACKAGES = [
  {
    name: 'Blocked Account',
    ignoreServices: []
  }, {
    name: 'Travel Insurance',
    ignoreServices: []
  }, {
    name: 'Statutory Health Insurance',
    ignoreServices: []
  }, {
    name: 'Liability Insurance',
    ignoreServices: ['1']
  }, {
    name: 'Accident Insurance',
    ignoreServices: ['1']
  }, {
    name: 'Current Account',
    ignoreServices: ['1']
  }, {
    name: '24/7 Emergency Care',
    ignoreServices: ['1', '2']
  }, {
    name: 'Visa Extension Support',
    ignoreServices: ['1', '2']
  }, {
    name: 'Legal Advisory and Insurance',
    ignoreServices: ['1', '2'],
    strikeThrough: true,
    color: color.error
  }, {
    name: 'Career Mentoring',
    ignoreServices: ['1', '2']
  }
]

const onPackageClicked = (edubaoPackage: object) => {
  // tslint:disable-next-line: no-console
  console.log({ edubaoPackage })
}

const onSituationClick = (value: string) => {
  // tslint:disable-next-line: no-console
  console.log({onSituationClick})
}

export const INFO = {
  title: 'Our packages are tailored to your needs.',
  description: `Let us know why you’re going to Germany,
   so we can show you the packages that match your situation best.`,
  currencySign: '€',
  currencyCode: 'EUR',
  selectedSituation: 'Studienkolleg',
  onSituationClick,
  situations: [
    'Studienkolleg',
    'Student',
    'Au-pair',
    'Work',
    'Exchange Student',
    'Vocational Training',
  ],
  subscription: 'month',
  packages: [{
    id: '1',
    name: 'basic',
    title: 'Basic',
    icon: BasicPackageIcon,
    price: '105',
    services: COMMON_PACKAGES,
    backgroundColor: '#7ED0FC',
    checkmark: CheckMarkBlue,
    logo: blue_small_logo,
  }, {
    id: '2',
    name: 'standard',
    title: 'Standard',
    icon: StandardPackageIcon,
    price: '125',
    services: COMMON_PACKAGES,
    backgroundColor: '#FF9D6F',
    checkmark: CheckMarkBlue,
    logo: blue_large_logo,
    magnified: true,
  }, {
    id: '3',
    name: 'elite',
    title: 'Elite',
    icon: ElitePackageIcon,
    price: '180',
    services: COMMON_PACKAGES,
    backgroundColor: color.mainBlue,
    color: color.white,
    checkmark: CheckMarkWhite,
    logo: white_logo,
  }],
  buttonText: 'More details',
  onClick: onPackageClicked
}
