import React from 'react'
import { get } from 'lodash'
import {
  Container,
  CardContainer,
  CardItemsContainer,
  CardItem,
  Avatar,
  Circle,
  NoBackgroundCircle,
  InformationContainer,
  Description,
  Headline,
  Title,
  ButtonContainer,
  StyledButton,
} from './style'

interface ICard {
  icon: string
  text: string
  headline: string
  inverted: boolean
}

interface IProps {
  cards: ICard[]
  title: string
  buttonBackgroundColor?: string
  buttonTextonClick: () => void
  buttonText: string
  buttonTextColor?: string
}

const Desktop = (props: IProps) => {
  const {
    title,
    cards,
    buttonBackgroundColor,
    buttonTextonClick,
    buttonText,
    buttonTextColor,
  } = props
  return (
    <Container>
      <Title>{title}</Title>
      <CardContainer>
        {cards.map((card: ICard) => {
          const hasAvatar = !!get(card, 'icon.desktop')
          return (
            <CardItemsContainer key={get(card, 'headline')}>
              <CardItem                
                background={get(card, 'backgroundcolor')}
              >
                <Avatar>
                  {
                    hasAvatar ? (
                      <NoBackgroundCircle>
                        <img
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                          alt={get(card, 'headline')}
                          src={get(card, 'icon.desktop')}
                        />
                      </NoBackgroundCircle>
                    ) : (
                        <Circle
                          background={get(card, 'circleBackgroundColor')}
                        />
                      )
                  }

                </Avatar>
                <InformationContainer>
                  <Headline
                    color={get(card, 'headlineColor')}
                  >
                    {get(card, 'headline')}
                  </Headline>
                  <Description
                    color={get(card, 'textColor')}
                  >
                    {card.text}
                  </Description>
                </InformationContainer>
              </CardItem>
            </CardItemsContainer>
          )
        })}
      </CardContainer>
      <ButtonContainer>
        <StyledButton
          background={buttonBackgroundColor}
          color={buttonTextColor}
          // tslint:disable-next-line: jsx-no-lambda
          onClick={buttonTextonClick}
        >
          {buttonText}
        </StyledButton>
      </ButtonContainer>
    </Container>
  )
}

export default Desktop
