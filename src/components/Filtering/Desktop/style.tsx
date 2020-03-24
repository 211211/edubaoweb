import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0;
  color: ${themeColor.mainBlue};
`

export const FilterBox = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: row;
`

export const StyledButton = styled((props: any) => <Button {...props} />)`
  && {
    margin-right: 40px;
    height: 48px;
    box-shadow: 0px 0px 16px #0000000B;
    border-radius: 16px;

    font-size: 16px;
    line-height: 22px;
    font-weight: bold;

    &&:last-child {
      margin-right: 0;
    }
  }
`