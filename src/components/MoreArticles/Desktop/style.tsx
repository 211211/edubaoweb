import React from 'react'
import styled from 'styled-components'
import {Icon} from 'antd'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 24px;
  display: flex;
  justify-content: center;
`

export const Titles = styled.div`
  width: 48%;
  max-width: 480px;
`

export const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1008px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Label = styled.div`
  color: #17a9b5;
  margin-left: 16px;
  text-transform: capitalize;
  font-size: 14px;
  line-height: 19px;
  font-weight: bold;
`

export const IconStyled = styled((props: any) => <Icon {...props} />)`
  font-size: 24px;
  color: #17a9b5;
`

export const SubTitle = styled.div`
  color: ${color.mainBlue};
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
`

export const SubLabel = styled.div`
  display: flex;
  align-items: center;
`

export const Articles = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  height: fit-content;
  > a:first-child {
    margin: 0;
  }
`

export const Article = styled.a`
  padding: 24px;
  background-color: ${color.white};
  box-shadow: 0px 0px 16px #0000000b;
  border-radius: 16px;
  margin-top: 24px;
`
