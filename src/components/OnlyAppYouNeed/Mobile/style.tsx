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
  flex: 1;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  padding: 16px;
`

export const HeaderContainer = styled.div``

export const ButtonContainer = styled.div`
  height: calc(100% - 108px); // WelcomeSection - padding
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
`

export const StyledButton = styled((props: any) => {
  return <Button type='primary' {...props} />
})`
  && {
    text-align: center;
    flex: 1;
  }
`
