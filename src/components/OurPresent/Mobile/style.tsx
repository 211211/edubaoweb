import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  background: ${({ background }) => background || themeColor.background};
  padding: 32px 24px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`

export const HeadLine = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${themeColor.mainBlue};
  margin-bottom: 24px;
`

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;

  margin-bottom: 32px;
`

export const ActionContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column-reverse;
  flex: 1;
  margin-bottom: 16px;
  margin-top: 16px;
  height: 88px;
  width: 256px;
`

export const NextButton = styled((props: any) => <Button {...props} />)`
  && {
    box-shadow: 0px 0px 16px #0000000B;
    border-radius: 16px;
    height: 44px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
  }
`

export const BackButton = styled((props: any) => <Button {...props} />)`
  && {
    color: ${themeColor.mainBlue};
    background: transparent;
    border-radius: 16px;
    height: 44px;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`
