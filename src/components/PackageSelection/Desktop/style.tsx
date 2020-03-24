import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.section<{background?: string}>`
  display: flex;
  max-width: 610px;
  padding: 80px 16px;
  margin: auto;
  flex-direction: column;
  background: ${({ background }) => background || themeColor.background} 0% 0% no-repeat padding-box;
`

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: ${themeColor.mainBlue};

  margin-bottom: 40px;
`

export const Description = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: regular;
  color: ${themeColor.mainBlue};

  margin-bottom: 32px;
`

export const SituationContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;

  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

export const SituationButton = styled((props: any) => <Button {...props} />)`
  && {
    margin-right: 16px;
    margin-bottom: 32px;
    height: 48px;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    border-radius: 16px;
    box-shadow: 0px 0px 16px #0000000B;

    &&:hover {
      background: ${themeColor.mainBlue} 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 16px #0000000B;
      color: ${themeColor.white}
      opacity: 1;
    }
  }
`
