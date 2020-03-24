import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Card, Button } from 'components'

export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const CardContainer = styled.div`  
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: row;
`

export const CardItemsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const CardItem = styled((props: any) => <Card {...props} />)`
  && {
    background: ${({ background }) => background || themeColor.mainBlue}  0% 0% no-repeat padding-box;
    cursor: pointer;
    width: 136px;
    height: 221px;
    max-height: 221px;
    box-shadow: 0px 0px 16px #0000000b;  
    padding: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    &.ant-card {
      padding: 0;
    }
  
    .ant-card-body {
      padding: 0;
      margin-top: 24px;
      display: flex;
      flex: 1;
      flex-direction: column;
    }
  }
`

export const ButtonContainer = styled.div`
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
`

export const StyledButton = styled((props: any) => <Button {...props} />)`
  && {
    padding: 7px 22px;
    border-radius: 8px;
    font-weight: bold;
    height: 30px;
    background-color: ${({ background }) => background || themeColor.white}
    color: ${({ color }) => color || themeColor.mainBlue};
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;
  }
`

export const Avatar = styled.div`
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  opacity: 1;
  margin-left: auto;
  margin-right: auto;
`

export const Circle = styled.div<{ background?: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ background }) => background} 0% 0% no-repeat padding-box;
`

export const InformationContainer = styled.div`
  display; flex;
  flex: 1;
  text-align: center;
`

export const Description = styled
  .div<{ fontSize?: string, fontWeight?: string, lineHeight?: string }>`
  font-size: ${({ fontSize }) => fontSize || '11px'};
  line-height: ${({ lineHeight }) => lineHeight || '15px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  max-height: 55px;
  && {
    color: ${({ color }) => color || themeColor.white};
  }
`
