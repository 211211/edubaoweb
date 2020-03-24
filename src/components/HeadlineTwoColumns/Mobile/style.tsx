import React from 'react'
import styled from 'styled-components'

import {Button} from 'components'
import {color} from 'themes'

interface IImage {
  readonly image?: string
}

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 24px;
  text-align: center;
`

export const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${color.error};
  margin-bottom: 32px;
  text-align: center;
`

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
`

export const Column = styled.div`
  margin: 30px 0;
`

const setImage = ({image}: IImage): string => {
  return `
    background: #c8edff url("${image}");
  `
}

export const Image = styled.div<IImage>`
  ${setImage}
  width: 100%;
  height: auto;
  padding-top: 80%;
  margin-bottom: 24px;
  border-radius: 16px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const SubTitle = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 24px;
`

export const SubDescription = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${color.error};
  margin-bottom: 24px;
`

export const ButtonWrapper = styled.a``

export const StyledButton = styled((props: any) => (
  <Button type='primary' {...props} />
))`
  && {
    height: 32px;
    width: 100%;
    font-size: 12px;
    line-height: 16px;
  }
`
