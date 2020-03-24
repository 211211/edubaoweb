import BasicPackageIcon from './images/basic.svg'
import StandardPackageIcon from './images/standard.svg'
// import ElitePackageIcon from './images/elite.svg'
import CheckMarkBlue from './images/Checkmark.Blue.svg'
// import CheckMarkWhite from './images/Checkmark.White.svg'
import blue_small_logo from './images/edubao_logo_blue_small_icon.svg'
import blue_large_logo from './images/edubao_logo_blue_large_icon.svg'
// import white_logo from './images/white_logo.svg'
import { color } from '../../themes'

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

export const BASIC = {
  checkmark: CheckMarkBlue,
  logo: blue_small_logo,
  currencySign: '€',
  currencyCode: 'EUR',
  subscription: 'month',
  id: '1',
  name: 'basic',
  title: 'Basic',
  icon: BasicPackageIcon,
  price: '105',
  services: COMMON_PACKAGES,
  backgroundColor: '#7ED0FC',

  buttonText: 'More details',
  onClick: onPackageClicked
}

export const MAGNIFIED_STANDARD_PACKAGE = {
  id: '2',
  name: 'standard',
  title: 'Standard',
  icon: StandardPackageIcon,
  price: '105',
  services: COMMON_PACKAGES,
  backgroundColor: '#7ED0FC',
  magnified: true,
  checkmark: CheckMarkBlue,
  logo: blue_large_logo,
  currencySign: '€',
  currencyCode: 'EUR',
  subscription: 'month',

  buttonText: 'More details',
  onClick: onPackageClicked
}
