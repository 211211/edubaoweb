import React from 'react'
import styled from 'styled-components'
import {color as themeColor} from 'themes'
import {Card} from 'components'

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
  width: 136px;
  height: 221px;
  // Apply for first two items
  &&:nth-child(-n + 2) {
    margin-bottom: 16px;
  }

  // Apply for last two items
  // :nth-last-child(-n + 2)
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
      // margin: auto;
      padding: 0;
    }

    .ant-card-body {
      flex: 1;
      padding: 0;
    }
  }
`

export const Title = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  padding: 32px;
  color: ${themeColor.mainBlue};
`

export const Content = styled.div`
  max-width: 320px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
`

export const Avatar = styled.div`
  margin: 32px 32px 24px;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: ${({color}) => color};
  opacity: 1;
  border-radius: 100%;
`

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #7ed0fc 0% 0% no-repeat padding-box;
`

export const Description = styled.div`
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
  max-height: 60px;
  font-size: 11px;
  line-height: 15px;
  color: ${({color}) => color || themeColor.fontBlue};
  flex: 1;
  align-items: center;
  justify-content: center;
`
