import styled from 'styled-components'
import { color as themeColor } from 'themes'

export const Container = styled.div<{ background?: string }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 288px;

  border-radius: 16px;
  padding: 16px;
  background: ${({ background }) => background || themeColor.white};
`

export const SmallTitle = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 8px;
  line-height: 11px;
  text-transform: capitalize;
  color: ${themeColor.mediumSpringGreen}

  margin-bottom: 8px;
`

export const HeadLine = styled.span`
  font-weight: bold;
  font-size: 21px;
  line-height: 32px;
  color: ${({ color }) => color || themeColor.mainBlue};
`
