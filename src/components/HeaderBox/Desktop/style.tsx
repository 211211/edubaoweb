import styled from 'styled-components'
import { color as themeColor } from 'themes'

export const Container = styled.div<{ background?: string }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 530px;

  border-radius: 16px;
  padding: 32px;
  background: ${({ background }) => background || themeColor.white};
`

export const SmallTitle = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize;
  color: ${themeColor.mediumSpringGreen}

  margin-bottom: 16px;
`

export const HeadLine = styled.span`
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: ${({ color }) => color || themeColor.mainBlue};

  margin-bottom: 24px;
`

export const Description = styled.div`
  font-weight: regular;
  font-size: 18px;
  line-height: 24px;
  color: ${({ color }) => color || themeColor.fontBlue};
  flex: 1;
`
