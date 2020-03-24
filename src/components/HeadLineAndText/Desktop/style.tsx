import styled from 'styled-components'
import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.div`
  text-align: center;
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
  max-width: 592px;
`

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${color.error};
  max-width: 592px;
`
