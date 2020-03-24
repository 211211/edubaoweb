// @ts-nocheck
import React from 'react'

import Steps from 'components/Steps'
import Base from '../Base'

const steps = [
  {
    title: 'Personal Details',
    // subTitle: `Let's get to know each other`,
    description: `How can we get in contact with you?" & "Where do you live now?`,
    content: <div>First content</div>
  },
  {
    title: 'Document Upload',
    // subTitle: `Passport Upload & Admission Letter Upload`,
    content: <div>Document Upload</div>
  },
  {
    title: 'Study Information',
    // subTitle: `For long have you already studied?`,
    description: 'When will you arrive in Germany?',
    content: <div>Study Information</div>
  },
  {
    title: 'Contract',
    // subTitle: `Please review your choice and accept our terms & conditions.`,
    description: 'Please sign the contract with your digital signature.',
    content: <div>Contract</div>
  },
  {
    title: 'Your Blocked Account',
    // subTitle: `Your personal IBAN Data`,
    content: <div>Your Blocked Account</div>
  },
]

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/343
const options = {
  name: 'Steps',
  description: 'Signup steps',
  usage: 'Signup steps',
  examples: [
    {
      label: 'Signup progress bar',
      value: <Steps steps={steps} />,
    },
    {
      label: 'Signup progress bar vertically',
      value: <Steps steps={steps} direction='vertical' />,
    },
  ],
}
export default () => <Base {...options} />
