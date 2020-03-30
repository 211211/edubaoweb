import React, { Fragment } from 'react'

import {
  Menu,
  OnlyAppYouNeed,
  WhatCanYouDoCard,
  HighlightArticle,
  HeadlineTwoColumns,
  WhyChooseCard,
  CustomersSay,
  Partners,
  SocialMedia,
  PackagesSection,
  ServiceIndicator,
  TextArticle,
  Text,
  PointedList,
  MoreArticles,
  Gallery,
  TextImage,
  TextChecklistImage,
  AppDownload,
  TextFloatingImage,
  Hiring,
  TextNarrowBox,
  LogosArticles,
  TextAsymmetricalLists,
  TextSymmetricalLists,
  DatePicker,
  Footer,
} from '../components'

const LandingPage = () => {
  return (
    <Fragment>
      <Menu />
      <OnlyAppYouNeed />
      <WhatCanYouDoCard />
      <PackagesSection />
      <HighlightArticle />
      <HeadlineTwoColumns />
      <WhyChooseCard />
      <CustomersSay />
      <ServiceIndicator />
      <Partners />
      <SocialMedia />
      <TextArticle />
      <Text />
      <PointedList />
      <MoreArticles />
      <Gallery />
      <TextImage />
      <TextChecklistImage />
      <AppDownload
        title='Read all of these articles and bookmark your favourites in our free EDUBAO app.'
      />
      <TextFloatingImage />
      <Hiring />
      <LogosArticles />
      <TextNarrowBox />
      <TextAsymmetricalLists />
      <TextSymmetricalLists />
      <DatePicker />
      <Footer />
    </Fragment>
  )
}

export default LandingPage
