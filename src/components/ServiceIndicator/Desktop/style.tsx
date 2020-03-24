import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Card, Button } from 'components'

export const Container = styled.section`
  background-color: ${({ color }) => color || themeColor.background};
  display: flex;
  justify-content: center;
  padding: 80px 80px 0 80px;

  flex-direction: column;
`

export const CardContainer = styled.div`  
  margin-bottom: 78.59px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: row;
`

export const CardItemsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

export const CardItem = styled((props: any) => <Card {...props} />)`
  && {
    margin-right: 32px;
    &:last-child {
      margin-right: 0;
    }

    width: 280px;
    height: 416px;
    box-shadow: 0px 0px 16px #0000000b;
    background: ${({ background }) => background || themeColor.white}  0% 0% no-repeat padding-box;
    padding: 0;
    border-radius: 16px;
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

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  text-align: center;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
`

export const StyledButton = styled((props: any) =><Button {...props} />)`
  && {
    border-radius: 16px;
    width: 346px;
    height: 60px;
    background-color: ${({ background }) => background || themeColor.mainBlue}
    color: ${({ color }) => color || themeColor.white};
    font-size: 21px;
    line-height: 28px;
    letter-spacing: 0;
  }
`

export const Title = styled.div`
  text-align: center;
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${themeColor.mainBlue};
  margin-bottom: 41px;
`

export const Avatar = styled.div`
  align-items: center;
  justify-content: center;
  width: 184px;
  height: 184px;
  opacity: 1;
  border-radius: 100%;
  margin: 48px auto;
`

export const Circle = styled.div<{ background?: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ background }) => background} 0% 0% no-repeat padding-box;
`

export const NoBackgroundCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const InformationContainer = styled.div`
  display; flex;
  flex: 1;
  max-width: 184px;
  max-height: 96px;
  text-align: center;

  margin-bottom: 40px;
`

export const Headline = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  letter-spacing: 0;
  margin-bottom: 48px;
  color: ${({ color }) => color || themeColor.mainBlue};
`

export const Description = styled.div`  
  max-height: 96px;
  font-size: 16px;
  line-height: 22px;
  color: ${({ color }) => color || themeColor.fontBlue};
  flex: 1;
  align-items: center;
  justify-content: center;
`
