import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Nunito';
`

export const PackageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;
  align-items: center;

  margin-bottom: 16px;
`

export const PackageContainer = styled
  .div<{ backgroundColor?: string, color?: string }>`
  border-radius: 16px;
  width: 288px;
  display: flex;
  flex-direction: column;

  background-color: ${({ backgroundColor }) => backgroundColor || themeColor.iceBlue};
  color: ${({ color }) => color || themeColor.mainBlue};
  font-size: 12px;
  line-height: 16px;

  margin-bottom: 16px;
`

export const PackageHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  color: ${({ color }) => color || themeColor.mainBlue};

  margin-top: 24px;
  margin-left: 24px;
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
  font-weight: bold;
  color: ${({ color }) => color || themeColor.mainBlue};
`

export const ServiceContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
  width: 230px;
  margin-left: auto;
  margin-right: auto;
`

export const ServiceItem = styled.div`
  height: 19px;
  display: flex;
  align-items: center;
  flex-direction: row;

  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const ServiceIcon = styled.div`
  width: 19px;
  display: flex;
  margin-right: 20px;
`

export const ServiceName = styled.div<{ strike?: boolean }>`
  font-size: 12px;
  line-height: 16px;
  color: ${({ color }) => color || themeColor.mainBlue};
  text-decoration: ${({ strike }) => strike ? 'line-through' : 'none'};
  font-weight: bold;
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
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-top: 16px;
  margin-bottom: 24px;
`

export const MoreButton = styled((props: any) => <Button {...props} />)`
  && {
    flex: 1;
    text-align: center;

    margin-left: 16px;
    margin-right: 16px;

    border-radius: 16px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
  }
`
