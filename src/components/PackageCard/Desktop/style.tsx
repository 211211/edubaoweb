import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.div`
  font-family: 'Nunito';
`

export const PackageContainer = styled
  .div<{ backgroundColor?: string, color?: string }>`
  border-radius: 16px;
  width: 311px;
  // height: 657px;
  display: flex;
  flex-direction: column;

  background-color: ${({ backgroundColor }) => backgroundColor || themeColor.mainBlue};
  color: ${({ color }) => color || themeColor.mainBlue};
  font-size: 14px;
  line-height: 36px;

  &.magnified {
    width: 386px;
    height: 815px;
    font-size: 17px;
    line-height: 48px;
  }
`

export const PackageHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ color }) => color || themeColor.mainBlue};
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: left;
  align-items: center;
`

export const PackageHeaderIcon = styled.div`
  color: ${({ color }) => color || themeColor.mainBlue};
  margin-right: 10px;
`

export const PackageHeaderText = styled.div`
  font-size: 18px;
  line-height: 24px
  color: ${({ color }) => color || themeColor.mainBlue};
  font-weight: bold;

  &.magnified {
    font-size: 21px;
    line-height: 28px;
  }
`

export const PackageIcon = styled.div`
  width: 170px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 16px;

  &.magnified {
    margin-bottom: 25px;
    width: 190px;
  }
`

export const ServiceContainer = styled.div`  
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`

export const ServiceItem = styled.div`
  height: 19px;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`

export const ServiceIcon = styled.div`
  width: 19px;
  display: flex;
  margin-right: 20px;
`

export const ServiceName = styled.div<{ strike?: boolean }>`
  && {
    font-size: 14px;
    color: ${({ color }) => color || themeColor.mainBlue};
    text-decoration: ${({ strike }) => strike ? 'line-through' : 'none'};
    font-weight: bold;

    .magnified {
      color: ${themeColor.error};
      font-size: 17px;
      line-height: 48px;
    }
  }
`

export const PriceContainer = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 10px;

  &.magnified {
    font-size: 29px;
    line-height: 39px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  max-height: 64px;
  &.magnified {
    margin-top: 9px;
    margin-bottom: 20px;
  }
`

export const MoreButton = styled((props: any) =><Button {...props} />)`
  && {
    border-radius: 16px;
    padding: 0;
    height: 48px;
    margin-right: 16px;
    margin-left: 16px;
    flex: 1;
    font-size: 18px;
    line-height: 24px;
    text-align: center;

    &.magnified {
      height: 60px;
      font-size: 21px;
      line-height: 28px;
      font-weight: bold;
    }
  }
`
