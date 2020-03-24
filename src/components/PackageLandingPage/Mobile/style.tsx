import React from 'react'
import styled from 'styled-components'
import { Button } from 'components'

export const Container = styled.section`
  height: 496px;
  display: flex;
  padding: 16px;
  margin: auto;
  flex-direction: column;
`

export const MarginContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px;
  align-items: center;
`

export const HeaderContainer = styled.div``

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 13px;
`

export const GetEdubao = styled((props: any) => <Button {...props} />)`
  && {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    height: 32px;
    max-width: 288px;
  }
`
