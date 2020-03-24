import checkmark from './images/checkmark.svg'
import logo from './images/logo.svg'

const ARRIVAL = [
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

const STUDY = [
  {
    name: 'University Enrollment',
  }, {
    name: 'Personal Study Mentor',
  }, {
    name: 'Education System Orientation',
  }, {
    name: 'Campus Life Guidance',
  }, {
    name: 'Support with German professors',
  }
]

const CAREER = [
  {
    name: 'Study Abroad Consultation',
  }, {
    name: 'Career Mentoring',
  }, {
    name: 'Internship Placement',
  }, {
    name: 'Job Application Coaching',
  }, {
    name: 'Workshops & Networking Events',
  }
]

const onClick = (upgradePackage: object) => {
  // tslint:disable-next-line: no-console
  console.log({ upgradePackage })
}

export const INFO = {
  title: 'Upgrade your stay so you can excel.',
  description: `We’re offering valuable upgrades for your stay, 
    whether you’re coming alone to get an education or with your family to start a new job.`,
  checkmark,
  logo,
  currency: '€',
  situations: [
    'Education',
    'Work',
  ],
  packages: [{
    id: '1',
    name: 'arrival',
    title: 'Arrival',
    price: '500',
    services: ARRIVAL,
  }, {
    id: '2',
    name: 'study',
    title: 'Study',
    price: '700',
    services: STUDY,
  }, {
    id: '3',
    name: 'career',
    title: 'Career',
    price: '900',
    services: CAREER,
  }],
  buttonText: 'Get + ',
  onClick,
}
