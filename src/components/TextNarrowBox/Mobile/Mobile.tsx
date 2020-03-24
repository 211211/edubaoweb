import React from 'react'

import {
  Wrapper,
  Title,
  Description,
  Content,
  TextWrapper,
  Card,
  CardTitle,
  PriceWrapper,
  Price,
  Text,
} from './style'

const Mobile = ({
  title = '',
  description = '',
  image = '',
  card = {},
}: ITextNarrowBox) => {
  const {title: cardTitle, month, year}: any = card

  return (
    <Wrapper image={image}>
      <Content>
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrapper>
        <Card>
          <CardTitle>{cardTitle}</CardTitle>
          <PriceWrapper>
            <Price>{month.price}</Price>
            <Text>{month.text}</Text>
          </PriceWrapper>
          <PriceWrapper>
            <Price>{year.price}</Price>
            <Text>{year.text}</Text>
          </PriceWrapper>
        </Card>
      </Content>
    </Wrapper>
  )
}

export default Mobile
