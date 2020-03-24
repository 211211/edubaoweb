import React from 'react'

import {SocialButton} from 'components'
import {
  Wrapper,
  Content,
  TitleWrapper,
  Title,
  Buttons,
  Button,
  Images,
  Image,
} from './style'

const Desktop = ({title = '', buttons = [], pictures = []}: ISocialMedia) => {
  return (
    <Wrapper>
      <Content>
        <TitleWrapper>
          <Title>{title}</Title>
          <Buttons>
            {buttons.map(({icon, label, link}: ISocialButton) => (
              <Button key={link}>
                <SocialButton icon={icon} label={label} link={link} />
              </Button>
            ))}
          </Buttons>
        </TitleWrapper>
        <Images>
          {pictures.map(({url, link}: any) => (
            <Image
              key={url}
              target='_blank'
              href={link}
              url={url}
              rel='noopener noreferrer'
            />
          ))}
        </Images>
      </Content>
    </Wrapper>
  )
}

export default Desktop
