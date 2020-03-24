import styled from 'styled-components'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 32px 16px;
  display: flex;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 12px;
`

export const List = styled.div``

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`

export const Index = styled.span`
  margin-right: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  color: ${color.mainBlue};
`

export const Label = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: ${color.fontBlue};
`
