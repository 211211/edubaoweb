import React from 'react'
import styled from 'styled-components'
import { color } from 'themes'
import { CardWithButton } from 'components'

export const Container = styled.section`
  display: flex;
  padding: 80px 24px;

  flex-direction: column;
`

export const Title = styled.div`
  width: 100%;
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
`

export const ServicesContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  max-width: 968px;
`

export const ServiceItemContainer = styled.div`
  display: flex;
  margin: 16px;
`

export const ServiceItem = styled((props: any) => {
  return (
    <CardWithButton
      fontWeightText={'bold'}
      fontSizeText={'18px'}
      lineHeightText={'24px'}
      {...props}
    />
  )
})`

`
