import React, { Fragment } from 'react'

import {
  Menu,
  ArrivalLandingPage,
  TextArticle,
  CustomersSay,
  ServiceIndicator,
  MoreArticles,
  Footer,
} from 'components'

const ArrivalPage = () => {
  return (
    <Fragment>
      <Menu />
      <ArrivalLandingPage />
      <TextArticle />
      <CustomersSay />
      <ServiceIndicator />
      <MoreArticles />
      <Footer />
    </Fragment>
  )
}

export default ArrivalPage
