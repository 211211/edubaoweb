import React from 'react'
import styled from 'styled-components'
import {Button} from 'components'

export const Container = styled.section`
  height: 700px;
  display: flex;
`

export const MarginContainer = styled.div`
  margin-left: 32px;
`

export const HeaderContainer = styled.div`
  margin-top: 153px;
`

export const ButtonContainer = styled.div`
  margin-top: 32px;
`

export const GetEdubao = styled((props: any) => <Button {...props} />)`
  && {
    padding: 16px;
    font-weight: bold;
    font-size: 21px;
    line-height: 28px;
    height: 60px;
    border-radius: 16px;
  }
`

export const NoteContainer = styled.div`
  margin-top: 24px;

  a {
    text-decoration: underline;
    font-size: 18px;
    font-weight: regular;
    line-height: 24px;
  }
`