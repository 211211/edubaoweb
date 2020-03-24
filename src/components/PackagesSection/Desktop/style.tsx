import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button } from 'components'

export const Container = styled.section`
  display: flex;
  padding: 80px 16px;
  margin: auto;
  flex-direction: column;

  font-family: 'Nunito';
`

export const PackageDescriptionContainer = styled.div`
  max-width: 610px;
  margin-right: auto;
  margin-left: auto;
`

export const Title = styled.div`
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
  font-weight: normal;
  color: ${themeColor.fontBlue};

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
  margin-top: 32px;
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

export const PackageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  text-align: center;
  justify-content: center;
  align-items: center;

  margin: 48px 30px 30px 0;

  > div {
    margin-right: 31px;
    margin-top: 31px

    &:last-child: {
      margin-right: 0;
    }
  }
`
