import styled from 'styled-components'
import { color as themeColor } from 'themes'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 242px;
  height: 288px;

  border-radius: 16px;
  background: ${themeColor.white} 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #0000000B;
  
`

export const ImageContainer = styled.div`
  height: 144px

  border-radius: 16px 16px 0 0;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 16px;
`

export const SubHeadLine = styled.div`
  color: ${themeColor.blue}
  font-weight: bold;
  font-size: 8px;
  line-height: 11px;
  text-transform: capitalize;
  height: 16px;

  display: flex;
  align-items: center;

  margin-bottom: 9px;
`

export const SubHeadLineIcon = styled.div`
  width: 16px;
  height: 16px;

  margin-right: 4px;
`

export const SubHeadLineText = styled.div`

`

export const HeadLine = styled.div`
  color: ${themeColor.mainBlue}
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 8px;

  height: 36px;
`

export const Description = styled.div`
  color: ${themeColor.error}
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  max-height: 45px;
`

