// @ts-nocheck
import React from 'react'

import PasswordStrenghIndicator from 'components/PasswordStrenghIndicator'
import Base from '../Base'

const onChange = (event: React.FormEventHandler<HTMLInputElement>): void => {
  console.log(event.currentTarget.value)
}

const password = 'A34a@adfasf_'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/104
const options = {
  name: 'Password strengh indicator',
  description: 'Desktop and Mobile version for Password strengh indicator.',
  usage: 'Password strength estimator ',
  examples: [
    {
      label: 'Password is A34a@adfasf_',
      value: <PasswordStrenghIndicator password={password} onChange={onChange}/>,
    },
    {
      label: 'Password is empty',
      value: <PasswordStrenghIndicator password={''} onChange={onChange}/>,
    },
    {
      label: 'Password is 111a',
      value: <PasswordStrenghIndicator password={'111a'} onChange={onChange}/>,
    },
    {
      label: 'Password is 111AAAa',
      value: <PasswordStrenghIndicator password={'111AAAa'} onChange={onChange}/>,
    },
  ],
}
export default () => <Base {...options} />
