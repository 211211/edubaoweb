import React from 'react'
import styled from 'styled-components'

import {Button} from 'components'
import {color} from 'themes'

interface IImage {
  readonly image?: string
}

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
  text-align: center;
`

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${color.error};
  max-width: 592px;
`

export const Columns = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1038px;
  flex-wrap: wrap;
`

export const Column = styled.div`
  flex: 1 1 45%;
  max-width: 700px;
  margin: 0 14px;
  margin-top: 32px;
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
  margin-bottom: 80px;
  border-radius: 16px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const SubTitle = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
`

export const SubDescription = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${color.error};
  margin-bottom: 32px;
`

export const ButtonWrapper = styled.a``

export const StyledButton = styled((props: any) => (
  <Button type='primary' {...props} />
))`
  && {
    height: 60px;
    width: 346px;
    font-size: 21px;
    line-height: 28px;
  }
`
