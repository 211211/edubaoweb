import styled from 'styled-components'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 32px 16px;
  display: flex;
  justify-content: center;
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
  margin-bottom: 24px;
`

export const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${color.fontBlue};
  margin-bottom: 24px;
`
