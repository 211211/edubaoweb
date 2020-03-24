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
    cursor: pointer;
    width: 280px;
    height: 416px;
    max-height: 416px;
    box-shadow: 0px 0px 16px #0000000b;
    background: ${({ background }) => background || themeColor.white}  0% 0% no-repeat padding-box;
    padding: 0;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: inherit;

    &.ant-card {
      padding: 0;
    }

    &&:hover {
      background: ${themeColor.mainBlue};
    }
  }
`

export const ButtonContainer = styled.div`
  text-align: center;
  margin: 0 auto 36px auto;  
`

export const StyledButton = styled((props: any) => <Button {...props} />)`
  && {
    padding: 10px 32px;
    border-radius: 16px;
    font-weight: bold;
    height: 48px;
    background: ${({ background }) => background || themeColor.white}
    color: ${({ color }) => color || themeColor.mainBlue};
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0;

    opacity: 0;
    ${CardItem}:hover & { // <-- This is what we can do now.
      background: ${themeColor.white};
      color: ${themeColor.mainBlue};
      opacity: 1;
    }
  }
`

export const Avatar = styled.div`
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 230px;
  opacity: 1;
  border-radius: 100%;
  margin: 16px auto 16px auto;
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
  margin-bottom: 32px;
`

export const Description = styled
  .div<{ fontSize?: string, fontWeight?: string, lineHeight?: string }>`
  max-height: 96px;
  font-size: ${({fontSize}) => fontSize || '16px'};
  line-height: ${({lineHeight}) => lineHeight || '22px'};
  font-weight: ${({fontWeight}) => fontWeight || 'normal'};
  color: ${({ color }) => color || themeColor.fontBlue};
  flex: 1;
  align-items: center;
  justify-content: center;

  ${CardItem}:hover & {
    color: ${themeColor.white};
  }
`
