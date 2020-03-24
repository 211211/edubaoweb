import React from 'react'

import {
  Wrapper,
  Title,
  Description,
  Content,
  Text,
  ImageWrapper,
  Image,
} from './style'

const Desktop = ({title = '', description = '', image = ''}: ITextImage) => {
  return (
    <Wrapper>
      <Content>
        <Text>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
        <ImageWrapper>
          <Image image={image} />
        </ImageWrapper>
      </Content>
    </Wrapper>
  )
}

export default Desktop
