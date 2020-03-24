import standard from './images/standard.svg'
import checkmark from './images/checkmark.svg'
import logo from './images/blue_logo.svg'
import { color } from 'themes'

const services = [
  {
    name: 'Blocked Account',
  }, {
    name: 'Travel Insurance',
  }, {
    name: 'Statutory Health Insurance',
  }, {
    name: 'Liability Insurance',
  }, {
    name: 'Accident Insurance',
  }, {
    name: 'Current Account',
  }
]

const onClick = (item: any) => {
  // tslint:disable-next-line: no-console
  console.log({ item })
}

export const INFO = {
  headline: 'How about something extra?',
  description: 'Become a EDUBAO Standard member for only X€ more / month and receive Y on top of your Z.',
  upgradedPackage: {
    id: '1',
    name: 'standard',
    title: 'Standard',
    icon: standard,
    price: '105',
    services,
    backgroundColor: color.warning,
    logo,
    checkmark,
    currencySign: '€',
    currencyCode: 'EUR',
    subscription: 'month',
    buttonType: 'primary',
    buttonText: 'Upgraded to EDUBAO Basic',
    onClick,
  },
  okButtonLabel: 'Continue without Upgrade',
  okButtonType: 'primary',
  onOk: onClick,
  cancelButtonLabel: 'Back',
  onCancel: onClick,
}
