import React from 'react'
import {
  Container,
  Wrapper,
  CardContainer,
  CardDetailContainer,
  InvertedCardDetailContainer,
  Content,
  Avatar,
  Circle,
  Description,
  Headline,
  InvertedHeadline,
  Title,
  StyledButton,
} from './style'

interface ICard {
  icon: string
  text: string
  headline: string
  inverted: boolean
}

interface IWhatCanYouDoCard {
  cards: ICard[]
  title: string
}

const Mobile = (props: IWhatCanYouDoCard) => {
  const {title, cards} = props
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Content>
          {cards.map(({icon, headline, text, inverted}) => {
            return (
              <CardContainer key={icon}>
                {inverted ? (
                  <InvertedCardDetailContainer>
                    <InvertedHeadline>{headline}</InvertedHeadline>
                    <StyledButton>{text}</StyledButton>
                  </InvertedCardDetailContainer>
                ) : (
                  <CardDetailContainer>
                    <Avatar>
                      <Circle>
                        <img alt={icon} src={icon} />
                      </Circle>
                    </Avatar>
                    <Headline>{headline}</Headline>
                    <Description>{text}</Description>
                  </CardDetailContainer>
                )}
              </CardContainer>
            )
          })}
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Mobile
