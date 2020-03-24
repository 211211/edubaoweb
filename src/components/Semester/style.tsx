import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'

export const Container = styled.div`
  display: flex;
`

export const Wrapper = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-radius: 16px;
  height: 48px;
  color: ${themeColor.fontBlue};
  background: transparent;
  font-size: 18px;
  line-height: 24px;
`

const CommonStyles = `
  cursor: pointer;
  border: 1px solid ${themeColor.fontBlue};
  width: 80px;
  background: ${themeColor.white};

  &:hover {
    opacity: 0.5;
  }
`

export const IncreaseContainer = styled((props: any) => <Wrapper {...props} />)`
  && {
    ${CommonStyles}
    margin-right: 10px;
  }
`

export const DecreasedContainer = styled((props: any) => <Wrapper {...props} />)`
  && {
    ${CommonStyles}
    margin-left: 10px;
  }
`

export const NumberContainer = styled((props: any) => <Wrapper {...props} />)`
  && {
    border: 1px solid ${themeColor.fontBlue};
    background: ${themeColor.white};
    width: 220px;
    span {
      opacity: 0.5
    }
  }
`

export const IconContainer = styled.div`
  width: 80px;
  height: 48px;
`