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
  max-width: 1008px;
  flex-wrap: wrap;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
`

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${color.fontBlue};
  margin-bottom: 40px;
  max-width: 592px;
`
