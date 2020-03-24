import styled from 'styled-components'
import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.div`
  height: 60px;
  text-align: center;
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 24px;
`

export const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${color.error};
`
