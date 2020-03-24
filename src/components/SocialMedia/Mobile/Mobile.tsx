import React from 'react'

import {SocialButton} from 'components'
import {Wrapper, Title, Buttons, Button, Images, Image} from './style'

const Mobile = ({title = '', buttons = [], pictures = []}: ISocialMedia) => {
  const images = pictures.slice(0, 4)
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Buttons>
        {buttons.map(({icon, label, link}: ISocialButton) => (
          <Button key={link}>
            <SocialButton icon={icon} label={label} link={link} />
          </Button>
        ))}
      </Buttons>
      <Images>
        {images.map(({url, link}: any) => (
          <Image
            key={url}
            target='_blank'
            href={link}
            url={url}
            rel='noopener noreferrer'
          />
        ))}
      </Images>
    </Wrapper>
  )
}

export default Mobile
