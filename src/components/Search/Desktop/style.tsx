import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Input, Button } from 'components'

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

export const SearchBox = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: row;
`

export const StyledInput = styled((props: any) => <Input {...props} />)`
  && {
    height: 48px;
    max-width: 384px;
    color: ${themeColor.mainBlue}
    background: ${({ background }) => background || themeColor.white} 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 16px #0000000B;
    border-radius: 16px;
    font-size: 16px;
    line-height: 22px;
    font-weight: regular;

    &&::placeholder {
      color: ${themeColor.fontBlue};
      opacity: 1;
    }

    &&:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${themeColor.fontBlue};
    }

    &&::-ms-input-placeholder { /* Microsoft Edge */
      color: ${themeColor.fontBlue};
    }
  }
`

export const StyledButton = styled((props: any) => <Button {...props} />)`
  && {
    margin-left: 32px;
    color: ${({ color }) => color || themeColor.white};
    height: 48px;
    background: ${({ background }) => background || themeColor.mainBlue} 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 16px #0000000B;
    border-radius: 16px;

    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
  }
`