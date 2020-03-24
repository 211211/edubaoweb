import React from 'react'

import {Wrapper, Content, Title, List, Item, Index, Label} from './style'

const Mobile = ({title = '', list = []}: IPointedList) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <List>
          {list.map((label: string, index: number) => (
            <Item key={index}>
              <Index>{`${index + 1}.`}</Index>
              <Label>{label}</Label>
            </Item>
          ))}
        </List>
      </Content>
    </Wrapper>
  )
}

export default Mobile
