import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  background: ${({ background }) => background || themeColor.background};

  padding-left: 136px;
  padding-right: 136px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;

  text-align: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`

export const HeadLine = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${themeColor.mainBlue};
  margin-bottom: 40px;
`

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;

  margin-bottom: 32px;
`

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-bottom: 92px;

  height: 48px;
`

export const NextButton = styled((props: any) => <Button {...props} />)`
  && {
    margin-left: auto;
    box-shadow: 0px 0px 16px #0000000B;
    border-radius: 16px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

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
    min-width: 176px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
