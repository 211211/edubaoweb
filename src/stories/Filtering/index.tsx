// @ts-nocheck
import React, { useState, useEffect } from 'react'

import Desktop from 'components/Filtering/Desktop'
import Mobile from 'components/Filtering/Mobile'
import Base from '../Base'

// https://dev.azure.com/edubao/Edubao.Website.Component/_workitems/edit/120
export default () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('')
  const onClick = (value: string) => {
    setSelectedFilter(value)
  }

  useEffect(() => {
    console.log(selectedFilter)
  }, [selectedFilter])

  const INFO = {
    headline: 'Search',
    value: selectedFilter,
    placeholder: `Type in what you're looking for...`,
    filters: [{
      value: 'newest',
      text: 'Newest',
    }, {
      value: 'most_popular',
      text: 'Most Popular',
    }],
    onClick,
  }

  const options = {
    name: 'Filter Component',
    description: 'Desktop and Mobile version for filter.',
    usage: 'Filtering for content',
    examples: [
      {
        label: 'Desktop',
        value: <Desktop {...INFO} />,
      },
      {
        label: 'Mobile',
        value: <Mobile {...INFO} />,
      },
    ],
  }

  return <Base {...options} />
}
