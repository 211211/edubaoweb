import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.section<{background?: string}>`
  max-width: 320px;
  padding: 32px 16px 0 16px;
  display: flex;
  flex: 1;
  margin: auto;
  flex-direction: column;
  font-family: 'Nunito';
  background: ${({ background }) => background || themeColor.background} 0% 0% no-repeat padding-box;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 21px;
  max-height: 60px;
  text-align: left;
  line-height: 32px;
  color: ${themeColor.mainBlue};

  margin-bottom: 24px;
`

export const Description = styled.div`
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  font-weight: regular;
  color: ${themeColor.mainBlue};

  margin-bottom: 32px;
`

export const SituationContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin-top: 32px;
  margin-bottom: 16px;
`

export const SituationButton = styled((props: any) => <Button {...props} />)`
  margin-left: auto;
  margin-right: auto;
  width: 242px;
  background: ${themeColor.white} 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #0000000B;

  margin-bottom: 16px;

  &&:hover {
    background: ${themeColor.mainBlue}
    color: ${themeColor.white}
  }
`
