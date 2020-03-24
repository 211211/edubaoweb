import React from 'react'

import {Carousel, Rate} from 'components'
import {
  Wrapper,
  Title,
  Content,
  Avatars,
  AvatarWrapper,
  Avatar,
  Quote,
  Name,
} from './style'

const Desktop = ({title = '', contents = []}: ICustomersSay) => {
  const getContents = ({quotes, rates}: any) => {
    if (quotes) {
      const avatars: any = []
      const texts: any = []

      quotes.forEach(({avatar, name, quote}: any, i: number) => {
        avatars.push(
          <AvatarWrapper key={avatar}>
            <Avatar src={avatar} />
          </AvatarWrapper>,
        )
        texts.push(
          <Quote key={`${quote}${i}`}>{quote}</Quote>,
          <Name key={`${name}${i}`}>{name}</Name>,
        )
      })

      return (
        <Content key={quotes}>
          <Avatars>{avatars}</Avatars>
          {texts}
        </Content>
      )
    }

    if (rates) {
      return (
        <div key={rates}>
          {rates.map(({value, name, quote}: any, index: number) => (
            <Content key={index}>
              <Rate value={value} disabled={true} />
              <Quote>{quote}</Quote>
              <Name>{name}</Name>
            </Content>
          ))}
        </div>
      )
    }

    return null
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Carousel>{contents.map(getContents)}</Carousel>
    </Wrapper>
  )
}

export default Desktop
