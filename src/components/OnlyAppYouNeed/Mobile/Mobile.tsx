import React from 'react'
import { get } from 'lodash'
import { HeaderBox } from 'components'
import {
  Container,
  HeaderContainer,
  MarginContainer,
  StyledButton,
  ButtonContainer,
} from './style'

interface IProps {
  icons: any
  title: string
  description: string
  mobileHeadline?: string
}

const Mobile = (props: IProps) => {
  const { icons, title, mobileHeadline } = props
  return (
    <Container
      style={{
        background: `url(${get(icons, 'backgroundMobile')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center'
      }}
    >
      <MarginContainer>
        <HeaderContainer>
          <HeaderBox
            headline={title}
          />
        </HeaderContainer>
        <ButtonContainer>
          <StyledButton>
            {mobileHeadline}
          </StyledButton>
        </ButtonContainer>
      </MarginContainer>
    </Container>
  )
}

export default Mobile
