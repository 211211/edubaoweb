import React from 'react'

import {
  Wrapper,
  Titles,
  Title,
  Description,
  Content,
  Text,
  ImageWrapper,
  Image,
} from './style'

const Desktop = ({
  titles = [],
  description = '',
  image = '',
}: ITextFloatingImage) => {
  return (
    <Wrapper>
      <Content>
        <Text>
          <Titles>
            {titles.map((title) => (
              <Title key={title}>{title}</Title>
            ))}
          </Titles>
          <Description>{description}</Description>
        </Text>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
      </Content>
    </Wrapper>
  )
}

export default Desktop
