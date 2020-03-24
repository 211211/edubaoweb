import React from 'react'

import {
  Wrapper,
  Content,
  TextWrapper,
  Title,
  Download,
  Label,
  ButtonWrapper,
  Button,
  Icon,
  Image,
} from './style'

const Mobile = ({title = '', download = {}, image = ''}: IAppDownload) => {
  const {label, buttons}: any = download

  return (
    <Wrapper>
      <Content>
        <TextWrapper>
          <Title>{title}</Title>
          <Download>
            <Label>{label}</Label>
            <ButtonWrapper>
              {buttons.map(({icon, link}: any) => (
                <Button
                  key={link}
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Icon src={icon} />
                </Button>
              ))}
            </ButtonWrapper>
          </Download>
        </TextWrapper>
        <Image src={image} />
      </Content>
    </Wrapper>
  )
}

export default Mobile
