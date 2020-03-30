import React, { Fragment } from 'react'

import {
  BuyRegisterComponent,
  AppDownload,
  BuyRegisterUpgradeSelection,
} from '../components'

const Page = () => {
  return (
    <Fragment>
      <BuyRegisterComponent />
      <AppDownload
        title={'Download the EDUBAO app and access all benefits of your subscription.'}
      />
      <BuyRegisterUpgradeSelection />
    </Fragment>
  )
}

export default Page
