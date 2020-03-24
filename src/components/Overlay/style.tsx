import React from 'react'
import styled from 'styled-components'
import { Button } from 'components'
import { color } from 'themes'

export const Container = styled.div`
  background: ${color.white};
  box-shadow: 0px 0px 16px #0000000a;
  border-radius: 16px;

  width: 288px;
  min-height: 358px;

  padding: 24px;
`

export const Header = styled.div`
  font-size: 21px;
  line-height: 28px;

  color: ${color.mainBlue};
  font-weight: bold;

  margin-bottom: 35px;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
`

export const Description = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: ${color.fontBlue};
`

export const Footer = styled.div`

`

export const ButtonContainer = styled.div`
  padding: 40px 16px 0 16px;
`

export const StyledButton = styled((props: any) => <Button {...props} type='primary' />)`
  && {
    border-radius: 16px;
    width: 100%;
    flex-grow: 1;
    color: ${color.white};
    height: 44px;
    font-size: 15px;
    line-height: 20px;
    font-weight: bold;
    box-shadow: 0px 0px 16px #0000000a;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    margin-bottom: 8px;
  }
`

export const SkipButton = styled.div`
  height: 48px;
  text-align: center;
  background: transparent;
  display: flex;
  flex-grow: 1;
  color: ${color.fontBlue};
  font-weight: normal;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  transition: color .4s ease-out;

  &:hover {
    text-decoration: underline;
    color: #457DFB;
  }
`
