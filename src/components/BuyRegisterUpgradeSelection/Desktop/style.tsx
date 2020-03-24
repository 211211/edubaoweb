import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  background: ${({ background }) => background || themeColor.background};
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 24px;
`

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  margin-bottom: 64px;

  height: 48px;
  width: 100%;
  max-width: 1008px
`

export const ChoosePackageButton = styled((props: any) => <Button {...props} />)`
  && {
    margin-left: auto;
    color: ${themeColor.mainBlue};
    background: ${themeColor.iceBlue} 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 16px #0000000B;
    border-radius: 16px;
    height: 48px;
    padding: 12px 84px;

    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
  }
`

export const BackButton = styled((props: any) => <Button {...props} />)`
  && {
    color: ${themeColor.mainBlue};
    background: ${themeColor.white} 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 16px #0000000B;
    border-radius: 16px;
    height: 48px;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    padding: 12px 68px;
  }
`

export const StyledPackageDetailContainer = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`
