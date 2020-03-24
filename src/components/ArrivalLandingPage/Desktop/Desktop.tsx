import React from 'react'
import { get } from 'lodash'
import { HeaderBox } from 'components'
import { color as themeColor } from 'themes'
import {
  Container,
  HeaderContainer,
  MarginContainer,
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

const Desktop = (props: IProps) => (
  <Container
    style={{
      backgroundImage: `url(${get(props.icons, 'foreground')}), url(${get(props.icons, 'background')})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <MarginContainer>
      <HeaderContainer>
        <HeaderBox
          headlineColor={themeColor.error}
          descriptionColor={themeColor.error}
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

export default Desktop
