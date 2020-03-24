import example1 from './images/example1.svg'
// import example2 from './images/example2.svg'
// import example3 from './images/example3.svg'
// import example4 from './images/example4.svg'

const onCardClicked = (cardInfo: object) => {
  // tslint:disable-next-line: no-console
  console.log({ cardInfo })
}

const services = [
  'Blocked Account',
  'Travel Insurance',
  'Health Insurance',
  'Current Account',
  'Liability Insurance',
  'Accident Insurance',
  '24/7 Emergency Care',
  'Visa Support',
  'Legal Advisory and Insurance',
].map((serviceName: string) => {
  return {
    circleBackgroundColor: '#7ED0FC 0% 0% no-repeat padding-box;',
    icon: {
      desktop: example1,
      mobile: example1,
    },
    text: serviceName,
    buttonText: 'Read more',
    onClick: onCardClicked
  }
})

export const INFO = {
  title: 'Find out more about our services',
  services
}