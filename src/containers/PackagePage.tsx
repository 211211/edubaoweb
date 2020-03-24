import React, { Fragment } from 'react'

import {
  Menu,
  PackageLandingPage,
  PackagesSection,
  HeadLineAndText,
  UpgradeYourStay,
  Partners,
  MoreArticles,
  FindOurMore,
} from 'components'

export const INFO = {
  title: 'Our services were awarded with',
  partners: [
    {
      logo: 'https://images.unsplash.com/photo-1542709305-460897a8d84c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk4MzYwfQ',
      label: 'Made in Germany',
      link: 'https://lmgtfy.com/?q=made+in+germany',
    },
    {
      logo: 'https://images.unsplash.com/photo-1542709305-460897a8d84c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk4MzYwfQ',
      label: 'German Accelerator',
      link: 'https://lmgtfy.com/?q=german+accelerator',
    },
    {
      logo: 'https://images.unsplash.com/photo-1544454152-3c93561d0237?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk4MzYwfQ',
      label: 'Foreign Office',
      link: 'https://lmgtfy.com/?q=foreign+office',
    },
    {
      logo: 'https://images.unsplash.com/photo-1563356322-27786a5bd212?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk4MzYwfQ',
      label: 'TÜV',
      link: 'https://lmgtfy.com/?q=tuv',
    },
    {
      logo: 'https://images.unsplash.com/photo-1563356322-27786a5bd212?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk4MzYwfQ',
      label: 'Something else',
      link: 'https://lmgtfy.com/?q=made+in+germany',
    },
    {
      logo: 'https://images.unsplash.com/photo-1542709305-460897a8d84c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk4MzYwfQ',
      label: 'More',
      link: 'https://lmgtfy.com/?q=german+accelerator',
    },
    {
      logo: 'https://images.unsplash.com/photo-1544454152-3c93561d0237?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk4MzYwfQ',
      label: 'And More',
      link: 'https://lmgtfy.com/?q=foreign+office',
    },
  ],
}

const ArrivalPage = () => {
  return (
    <Fragment>
      <Menu />
      <PackageLandingPage />
      <PackagesSection />
      <HeadLineAndText />
      <UpgradeYourStay />
      <FindOurMore />
      <Partners />
      <Partners {...INFO} />
      <MoreArticles />
    </Fragment>
  )
}

export default ArrivalPage
