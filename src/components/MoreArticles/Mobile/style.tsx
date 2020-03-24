import React from 'react'
import styled from 'styled-components'
import {Icon} from 'antd'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const Titles = styled.div``

export const Title = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
`

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const Label = styled.div`
  color: #17a9b5;
  margin-left: 4px;
  text-transform: capitalize;
  font-size: 8px;
  line-height: 11px;
  font-weight: bold;
`

export const IconStyled = styled((props: any) => <Icon {...props} />)`
  font-size: 16px;
  color: #17a9b5;
`

export const SubTitle = styled.div`
  color: ${color.mainBlue};
  font-size: 12px;
  line-height: 18px;
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
  width: 100%;
  height: fit-content;
  margin-top: 24px;
  > a:first-child {
    margin: 0;
  }
`

export const Article = styled.a`
  padding: 16px;
  background-color: ${color.white};
  box-shadow: 0px 0px 16px #0000000b;
  border-radius: 16px;
  margin-top: 16px;
`
