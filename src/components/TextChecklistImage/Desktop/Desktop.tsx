import React from 'react'

import {
  Wrapper,
  Title,
  Description,
  Content,
  TextWrapper,
  CheckList,
  Item,
  CheckIcon,
  Text,
  ImageWrapper,
  Image,
} from './style'

const Desktop = ({
  title = '',
  descriptions = [],
  image = '',
  checklist = [],
}: ITextChecklistImage) => {
  return (
    <Wrapper>
      <Content>
        <TextWrapper>
          <Title>{title}</Title>
          {descriptions.map((description) => (
            <Description key={description}>{description}</Description>
          ))}
          <CheckList>
            {checklist.map((item: string, index: number) => (
              <Item key={index}>
                <CheckIcon type='check' />
                <Text>{item}</Text>
              </Item>
            ))}
          </CheckList>
        </TextWrapper>
        <ImageWrapper>
          <Image image={image} />
        </ImageWrapper>
      </Content>
    </Wrapper>
  )
}

export default Desktop
