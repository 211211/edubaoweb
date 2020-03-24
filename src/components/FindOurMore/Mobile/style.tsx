import React from 'react'
import styled from 'styled-components'
import { color } from 'themes'
import { CardWithButton } from 'components'

export const Container = styled.section`
  display: flex;
  padding: 32px 8px;

  flex-direction: column;
`

export const Title = styled.div`
  text-align: center;
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
`

export const ServicesContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
`

export const ServiceItemContainer = styled.div`
  display: flex;
  height: 221px;
  flex: 1;
  margin: 8px;
`

export const ServiceItem = styled((props: any) => {
  return (
    <CardWithButton
      fontWeightText={'bold'}
      fontSizeText={'11px'}
      lineHeightText={'15px'}
      {...props}
    />
  )
})`

`
