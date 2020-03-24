import React from 'react'

import {
  Wrapper,
  Title,
  Description,
  Content,
  TextWrapper,
  Lists,
  List,
  Item,
  CheckIcon,
  Text,
} from './style'

const Desktop = ({
  title = '',
  description = '',
  image = '',
  firstList = [],
  secondList = [],
  symmetry,
}: ITextTwoLists) => {
  return (
    <Wrapper image={image}>
      <Content>
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrapper>
        <Lists>
          <List symmetry={symmetry}>
            {firstList.map((item: string, index: number) => (
              <Item key={item} isFirst={index === 0}>
                <CheckIcon type='check' />
                <Text>{item}</Text>
              </Item>
            ))}
          </List>
          <List symmetry={symmetry}>
            {secondList.map((item: string, index: number) => (
              <Item key={item} isFirst={index === 0}>
                <CheckIcon type='check' />
                <Text>{item}</Text>
              </Item>
            ))}
          </List>
        </Lists>
      </Content>
    </Wrapper>
  )
}

export default Desktop
