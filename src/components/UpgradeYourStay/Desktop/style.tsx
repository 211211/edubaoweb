import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import { Button, UpgradeCard } from 'components'

export const Container = styled.section`
  display: flex;
  padding: 16px 16px 0 16px;
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
  margin-top: 32px;
`

export const SituationButton = styled((props: any) => <Button {...props} />)`
  && {
    border-radius: 16px;
    margin-right: 32px;
    margin-bottom: 32px;

    &&:hover {
      background: ${themeColor.mainBlue}
      color: ${themeColor.white}
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

  margin: 48px 30px 0 0;

  > section {
    margin-right: 55px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const StyledUpgradeCard =
  styled((props: any) => <UpgradeCard {...props} />)`
  
`
