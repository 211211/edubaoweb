import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button, Link } from 'components'

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

export const Title = styled.div`
  text-align: left;
  letter-spacing: 0;
  color: ${themeColor.mainBlue};
  opacity: 1;
  font-weight: bold;
  font-size: 21px;
  line-height: 32px;

  margin-top: 32px;
  margin-bottom: 32px;
`

export const ActionContainer = styled.div`
  max-width: 258px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 38px;
  margin-bottom: 64px;

  display: flex;
  flex-direction: column;
`

export const ChoosePackageButton = styled((props: any) => <Button {...props} />)`
  && {
    font-size: 16px;
    line-height: 22px;

    color: ${themeColor.white};
    background: ${themeColor.blue} 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 16px #0000000B;
    border-radius: 16px;
    height: 48px;
    padding: 11px 80px;

    margin-bottom: 16px;
  }
`

export const BackLink = styled((props: any) => <Link {...props} />)`
  && {
    max-width: 258px;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    line-height: 16px;
    color: ${themeColor.mainBlue};
  }
`

export const PackageItemContainer = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`
