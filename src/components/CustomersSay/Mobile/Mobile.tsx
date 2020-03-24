import React, {Fragment} from 'react'

import {Carousel, Rate} from 'components'
import {
  Wrapper,
  Title,
  Content,
  AvatarWrapper,
  Avatar,
  Quote,
  Name,
} from './style'

const Mobile = ({title = '', contents = []}: ICustomersSay) => {
  const getContents = ({quotes, rates}: any) => {
    if (quotes) {
      return (
        // This cuz carousel component use inline style
        <div key={quotes}>
          <Content>
            {quotes.map(({avatar, name, quote}: any, index: number) => (
              <Fragment key={index}>
                <AvatarWrapper key={avatar}>
                  <Avatar src={avatar} />
                </AvatarWrapper>
                <Quote>{quote}</Quote>
                <Name>{name}</Name>
              </Fragment>
            ))}
          </Content>
        </div>
      )
    }

    if (rates) {
      return (
        <div key={rates}>
          <Content>
            {rates.map(({value, name, quote}: any, index: number) => (
              <Fragment key={index}>
                <Rate value={value} disabled={true} />
                <Quote>{quote}</Quote>
                <Name>{name}</Name>
              </Fragment>
            ))}
          </Content>
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

export default Mobile
