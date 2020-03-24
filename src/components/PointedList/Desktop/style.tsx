import styled from 'styled-components'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 24px;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  max-width: 592px;
  flex-wrap: wrap;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 12px;
`

export const List = styled.div``

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`

export const Index = styled.span`
  margin-right: 24px;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: ${color.mainBlue};
`

export const Label = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: ${color.fontBlue};
`
