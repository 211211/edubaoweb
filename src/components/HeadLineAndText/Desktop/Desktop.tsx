import React from 'react'

import {
  Wrapper,
  Title,
  Description,
} from './style'

const rawMarkup = (text: string) => {
  return { __html: text }
}

interface IProps {
  title?: string
  description?: string
}

const Desktop = ({
  title = '',
  description = ''
}: IProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>
        <div dangerouslySetInnerHTML={rawMarkup(description)} />
      </Description>
    </Wrapper>
  )
}

export default Desktop
