import React from 'react'
import {
  Container,
  Wrapper,
  CardContainer,
  CardDetailContainer,
  Content,
  Avatar,
  Circle,
  Description,
  Title,
} from './style'

interface ICard {
  icon: string
  text: string
}

interface IWhyChooseCard {
  cards: ICard[]
  title: string
}

const Desktop = (props: IWhyChooseCard) => {
  const { title, cards } = props
  const rawMarkup = (text: string) => {
    return { __html: text }
  }
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Content>
          {cards.map(({ icon, text }) => {
            return (
              <CardContainer key={icon}>
                <CardDetailContainer>
                  <Avatar>
                    <div
                      style={{
                        width: 230,
                        height: 230,
                        position: 'relative'
                      }}
                    >
                      <div style={{
                        height: 'inherit',
                        width: 'inherit',
                        padding: 23
                      }}>
                        <Circle style={{ position: 'relative' }} />
                      </div>
                      <img
                        alt={icon}
                        src={icon}
                        style={{ position: 'absolute', top: 0 }}
                      />
                    </div>
                  </Avatar>
                  <Description>
                    <div dangerouslySetInnerHTML={rawMarkup(text)} />
                  </Description>
                </CardDetailContainer>
              </CardContainer>
            )
          })}
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Desktop
