import React from 'react'
import styled from 'styled-components'
import {color as themeColor} from 'themes'
import {Card} from 'components'

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
  width: 280px;
  height: 416px;
  max-height: 416px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`

export const CardDetailContainer = styled((props: any) => <Card {...props} />)`
  && {
    padding-top: 0;
    border-radius: 16;
    box-shadow: 0px 0px 16px #0000000b;
    background: #ffffff 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: inherit;
  
    .ant-card-body {
      height: 368px;
    }
  }
`

export const Title = styled.span`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${themeColor.mainBlue};
  margin-bottom: 32px;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const Avatar = styled.div`
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 230px;
  background: ${({color}) => color};
  opacity: 1;
  border-radius: 100%;
  margin: auto;
`

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #7ed0fc 0% 0% no-repeat padding-box;
`

export const Description = styled.div`
  text-align: center;
  margin-top: 24px;
  max-height: 96px;
  font-size: 18px;
  line-height: 24px;
  color: ${({color}) => color || themeColor.fontBlue};
  flex: 1;
  align-items: center;
  justify-content: center;
`
