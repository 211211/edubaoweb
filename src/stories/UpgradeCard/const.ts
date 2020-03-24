import checkmark from './images/checkmark.svg'
import logo from './images/logo.svg'

const COMMON_PACKAGES = [
  {
    name: 'Airport Pick-up',
  }, {
    name: 'SIM Card',
  }, {
    name: 'Accommodation Guidance',
  }, {
    name: 'Migration Office Registration',
  }, {
    name: 'First Week Orientation',
  }
]

const onClick = (upgradePackage: object) => {
  // tslint:disable-next-line: no-console
  console.log({ upgradePackage })
}

export const INFO = {
  checkmark,
  logo,
  currency: '€',
  item: {
    id: '1',
    name: 'arrival',
    title: 'Arrival',
    price: '500',
    services: COMMON_PACKAGES,
  },
  buttonText: 'More details',
  onClick,
}
