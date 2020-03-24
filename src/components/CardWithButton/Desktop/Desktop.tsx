import React from 'react'
import { get } from 'lodash'
import {
  Container,
  CardItem,
  Avatar,
  Circle,
  InformationContainer,
  Description,
  ButtonContainer,
  StyledButton,
} from './style'

interface ICardProps {
  icon: string
  text: string
  fontSizeText?: string
  fontWeightText?: string
  lineHeightText?: string
  background?: string

  circleBackgroundColor?: string
  buttonBackgroundColor?: string
  buttonText?: string
  buttonTextColor?: string
  onClick?: () => void
}

const rawMarkup = (text: string) => {
  return { __html: text }
}

const WIDTH_HEIGHT_DESKTOP_CARD = 230
const PADDING = 23

const Desktop = (props: ICardProps) => {
  return (
    <Container>
      <CardItem
        background={get(props, 'background')}
      >
        <Avatar>
          <div
            style={{
              width: WIDTH_HEIGHT_DESKTOP_CARD,
              height: WIDTH_HEIGHT_DESKTOP_CARD,
              position: 'relative'
            }}
          >
            <div style={{
              height: 'inherit',
              width: 'inherit',
              padding: PADDING
            }}>
              <Circle
                style={{ position: 'relative' }}
                background={get(props, 'circleBackgroundColor')}
              />
            </div>
            <img
              alt={get(props, 'text')}
              src={get(props, 'icon.desktop')}
              style={{ position: 'absolute', top: 0 }}
            />
          </div>
        </Avatar>
        <InformationContainer>
          <Description
            color={get(props, 'textColor')}
            lineHeight={get(props, 'lineHeightText')}
            fontSize={get(props, 'fontSizeText')}
            fontWeight={get(props, 'fontWeightText')}
          >
            <div dangerouslySetInnerHTML={rawMarkup(get(props, 'text'))} />
          </Description>
        </InformationContainer>
        <ButtonContainer>
          <StyledButton
            color={props.buttonTextColor}
            background={props.buttonBackgroundColor}
          >
            {props.buttonText}
          </StyledButton>
        </ButtonContainer>
      </CardItem>
    </Container>
  )
}

export default Desktop
