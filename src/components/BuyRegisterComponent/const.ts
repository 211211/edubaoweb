import background from './images/background.jpeg'
import icon from './images/financesolution.svg'
import logo from './images/logo.svg'
import white_logo from './images/white_logo.svg'

const onSituationClick = (value: string) => {
  // tslint:disable-next-line: no-console
  console.log({value})
}
export const INFO = {
    title: 'Choose the type of your stay for tailored packages that match your life.',
    selectedSituation: 'Studienkolleg',
    situations: [
      'Studienkolleg',
      'Student',
      'Au-pair',
      'Work',
      'Exchange Student',
      'Vocational Training',
    ],
    onSituationClick,
    onPackageClick: onSituationClick,
    selectedPackage: 'Standard',
    packages: [
      {
        background: '#7ED0FC',
        logo,
        color: '#0D507A',
        price: 105,
        currency: '€',
        subscription: 'month',
        name: 'Basic',
        description: 'This package includes all Basic Services as well as the following:',
        services: [{
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
          description: 'Our mentors guide your specifically at your university and accompany you to the international office for enrollment.',
        }, {
          backgroundImageUrl: background,
          subHeadLine: 'Edubao Services',
          subHeadLineIcon: icon,
          headline: 'Accident Insurance',
          description: 'We support your Migration Office Registration, a necessary step in moving to Germany.',
        }]
      },
      {
        background: '#FF9D6F',
        logo,
        color: '#0D507A',
        price: 20,
        currency: '€',
        subscription: 'month',
        name: 'Standard',
        description: 'This package includes all Basic Services as well as the following:',
        services: [{
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
          description: 'Our mentors guide your specifically at your university and accompany you to the international office for enrollment.',
        }, {
          backgroundImageUrl: background,
          subHeadLine: 'Edubao Services',
          subHeadLineIcon: icon,
          headline: 'Accident Insurance',
          description: 'We support your Migration Office Registration, a necessary step in moving to Germany.',
        }]
      },
      {
        background: '#0D507A',
        buttonBackground: '#ffffff',
        buttonColor: '#0D507A',
        logo: white_logo,
        color: '#ffffff',
        price: 75,
        currency: '€',
        subscription: 'month',
        name: 'Elite',
        description: 'This package includes all Basic and Standard Services as well as the following:',
        services: [{
          backgroundImageUrl: background,
          subHeadLine: 'Edubao Services',
          subHeadLineIcon: icon,
          headline: '24/7 Emergency Care',
          description: 'EDUBAO provides hand-on emergency care in any situation.',
        }, {
          backgroundImageUrl: background,
          subHeadLine: 'Edubao Services',
          subHeadLineIcon: icon,
          headline: 'Visa Support',
          description: 'Our mentors guide your specifically at your university and accompany you to the international office for enrollment.',
        }, {
          backgroundImageUrl: background,
          subHeadLine: 'Edubao Services',
          subHeadLineIcon: icon,
          headline: 'Legal Advisory',
          description: 'We support your Migration Office Registration, a necessary step in moving to Germany.',
        }]
      }
    ]
  }