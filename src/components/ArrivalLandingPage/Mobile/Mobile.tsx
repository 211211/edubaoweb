import React from 'react'
import { get } from 'lodash'
import { HeaderBox } from 'components'
import { color as themeColor } from 'themes'
import {
  Container,
  MarginContainer,
  HeaderContainer,
  ButtonContainer,
  GetEdubao,
} from './style'

interface IProps {
  icons: object
  headline?: string
  description: string
  buttonText: string
  onClick?: () => void
}

const Mobile = (props: IProps) => (
  <Container
    style={{
      background: `url(${get(props.icons, 'backgroundMobile')})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <MarginContainer>
      <HeaderContainer>
        <HeaderBox
          headlineColor={themeColor.error}
          headline={props.headline}
          description={props.description}
        />
      </HeaderContainer>
      <ButtonContainer>
        <GetEdubao onClick={props.onClick} type='primary'>
          {props.buttonText}
        </GetEdubao>
      </ButtonContainer>
    </MarginContainer>
  </Container>
)

export default Mobile
