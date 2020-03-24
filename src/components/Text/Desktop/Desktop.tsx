import React from 'react'

import {Wrapper, Content, Title, Description} from './style'

const Desktop = ({title = '', descriptions = []}: IText) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        {descriptions.map((d) => (
          <Description key={d}>{d}</Description>
        ))}
      </Content>
    </Wrapper>
  )
}

export default Desktop