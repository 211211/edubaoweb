import React from 'react'
import styled from 'styled-components'
import {color as themeColor} from 'themes'
import {Card, Button} from 'components'

export const Container = styled.section`
  background-color: ${({color}) => color || themeColor.background};
  display: flex;
  justify-content: center;
  padding: 80px 80px 0 80px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
`

export const CardContainer = styled.div`
  width: 384px;
  height: 376px;
  margin-bottom: 32px;
  margin-right: 32px;
  flex-wrap: wrap;
`

export const CardDetailContainer = styled((props: any) => <Card {...props} />)`
  && {
    padding: 0;
    border-radius: 16px;
    box-shadow: 0px 0px 16px #0000000b;
    background: #ffffff 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: inherit;

    &.ant-card {
      padding: 0;
    }

    .ant-card-body {
      flex: 1;
      height: 368px;
      padding: 0;
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
    letter-spacing: 0;
  }
`

export const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${themeColor.mainBlue};
  margin-bottom: 32px;
  padding-left: 32px;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 32px;
`

export const Avatar = styled.div`
  align-items: center;
  justify-content: center;
  width: 184px;
  height: 184px;
  background: ${({color}) => color || themeColor.mainBlue};
  opacity: 1;
  border-radius: 100%;
  margin: 32px auto;
`

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #7ed0fc 0% 0% no-repeat padding-box;
`

export const Headline = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  letter-spacing: 0;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 16px;
  color: ${({color}) => color || themeColor.mainBlue};
`

export const InvertedHeadline = styled(Headline)`
  align-items: flex-end;
  margin-bottom: 48px;
  display: flex;
  text-align: center;
`

export const Description = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  max-height: 96px;
  font-size: 16px;
  line-height: 22px;
  color: ${({color}) => color || themeColor.fontBlue};
  flex: 1;
  align-items: center;
  justify-content: center;
`
