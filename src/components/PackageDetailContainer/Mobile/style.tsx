import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;

  border-radius: 16px;
  background: ${({ background }) => background || themeColor.background};
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 22.23px 24.23px;
`

export const HeadLine = styled.div`
  color: ${themeColor.mainBlue}
  display: flex;
  align-items: center;
  flex-direction: row;

  margin-bottom: 32px;
`

export const HeadLineIcon = styled.div`
  margin-right: 8px;
`

export const Description = styled.div`
  text-align: center;
  font-size: 11px;
  line-height: 15px;
  font-weight: bold;
  margin-bottom: 32px;

  color: ${({ color }) => color || themeColor.mainBlue};
`

export const HeadLineText = styled.div`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;

  color: ${({ color }) => color || themeColor.mainBlue};
`

export const ButtonContainer = styled.div`

`

export const StyledButton = styled((props: any) => <Button {...props} />)`
  && {
    color: ${({ color }) => color || themeColor.white};
    background: ${({ background }) => background || themeColor.mainBlue} 0% 0% no-repeat padding-box;
    padding: 11px 76px;
    font-weight: bold;
    font-size: 16px;
    height: 48px;
    border-radius: 16px;
  }
`

export const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;  
  > div {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const PriceContainer = styled.div`
  color: ${({ color }) => color || themeColor.mainBlue};
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 16px;

  font-weight: bold;
  font-size: 21px;
  line-height: 28px;
`
