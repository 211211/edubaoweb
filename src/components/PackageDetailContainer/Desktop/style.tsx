import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button, PackageDetailCard } from 'components'

export const Container = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1008px;
  border-radius: 16px;
  background: ${({ background }) => background || themeColor.background};
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 23px;
`

export const HeadLine = styled.div`
  color: ${themeColor.mainBlue}
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 32px;
`

export const HeadLineIcon = styled.div`
  height: 32px;
  margin-right: 8px;
`

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;

  color: ${({ color }) => color || themeColor.mainBlue};
`

export const HeadLineText = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;

  color: ${({ color }) => color || themeColor.mainBlue};
`

export const ButtonContainer = styled.div`

`

export const StyledButton = styled((props: any) => <Button {...props} />)`
  && {
    color: ${({ color }) => color || themeColor.white};
    background: ${({ background }) => background || themeColor.mainBlue} 0% 0% no-repeat padding-box;
    padding: 12px 45.5px;
    font-weight: bold;
    font-size: 18px;
    height: 48px;
    border-radius: 16px;
  }
`

export const StyledPackageDetailCard =
  styled((props: any) => <PackageDetailCard {...props} />)`

`

export const PackageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;  
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  flex-wrap: wrap;
  > div {
    margin-right: 28px;
    margin-top: 32px;
    &:last-child {
      margin-right: 0;
    }
  }
`
