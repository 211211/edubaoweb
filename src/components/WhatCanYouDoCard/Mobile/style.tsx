import React from 'react'
import styled from 'styled-components'
import {color as themeColor} from 'themes'
import {Card, Button} from 'components'

export const Container = styled.section`
  background-color: ${({color}) => color || themeColor.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardContainer = styled.div`
  margin-bottom: 16px;
  flex-wrap: wrap;
  width: 288px;
  height: 268px;
`

export const CardDetailContainer = styled((props: any) => <Card {...props} />)`
  && {
    border-radius: 16;
    box-shadow: 0px 0px 16px #0000000b;
    background: #ffffff 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: inherit;

    &.ant-card {
      margin: auto;
      padding: 0;
    }

    .ant-card-body {
      flex: 1;
      padding: 0;
      height: 171px;
    }
  }
`

export const InvertedCardDetailContainer = styled(CardDetailContainer)`
  &.ant-card {
    box-shadow: none;
    background: transparent;
  }

  .ant-card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const StyledButton = styled((props: any) => {
  return <Button type='primary' {...props} />
})`
  && {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;Z
  }
`

export const Title = styled.div`
  text-align: center;
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  padding: 32px;
  color: ${themeColor.mainBlue};
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  padding-left: 16px;
  padding-right: 16px;
`

export const Avatar = styled.div`
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 128px;
  background: ${({color}) => color || themeColor.mainBlue};
  opacity: 1;
  border-radius: 100%;
  margin: 24px auto;
`

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #7ed0fc 0% 0% no-repeat padding-box;
`

export const Headline = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  letter-spacing: 0;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 8px;
  color: ${({color}) => color || themeColor.mainBlue};
`

export const InvertedHeadline = styled(Headline)`
  text-align: center;
  align-items: flex-end;
  margin-bottom: 48px;
  display: flex;
`

export const Description = styled.div`
  max-height: 60px;
  font-size: 11px;
  line-height: 15px;
  color: ${({color}) => color || themeColor.fontBlue};
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
`
