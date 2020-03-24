// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import {WindowDimensionsProvider, GlobalStyle} from 'components'
// import {color} from 'themes'

const Wrapper = styled.div`
  padding: 20px;
  background-color: #eee;
`
const Header = styled.h1``
const Title = styled.h2``
const Description = styled.p`
  margin: 20px;
`
const Session = styled.section``
const Label = styled.h3``
const Value = styled.div`
  margin: 20px;
  display: flex;
`

export default ({name, description, usage, examples}) => (
  <WindowDimensionsProvider>
    <GlobalStyle />
    <Wrapper>
      <Header>{name}</Header>
      <Description>{description}</Description>
      <Title>When to use</Title>
      <Description>{usage}</Description>
      <Title>Examples:</Title>
      {examples.map(({label, value}) => (
        <Session key={label}>
          <Label>{label}</Label>
          <Value>{value}</Value>
        </Session>
      ))}
    </Wrapper>
  </WindowDimensionsProvider>
)
