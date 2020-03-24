import React from 'react'
import styled from 'styled-components'
import {Icon} from 'antd'

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

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const TextWrapper = styled.span`
  width: 100%;
  height: fit-content;
`

export const Title = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 24px;
`

export const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${color.fontBlue};
  margin-bottom: 16px;
`

const setImage = ({image}: IImage): string => {
  return `
    background: #C8EDFF url("${image}");
  `
}

export const ImageWrapper = styled.div`
  width: 100%;
`

export const Image = styled.div<IImage>`
  ${setImage}
  width: 100%;
  height: auto;
  padding-top: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 16px;
`

export const CheckList = styled.div`
`

export const Item = styled.div`
  display: flex;
  margin-bottom: 12px;
`

export const CheckIcon = styled((props: any) => <Icon {...props} />)`
  font-size: 24px;
  color: ${color.fontBlue};
`

export const Text = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${color.fontBlue};
  letter-spacing: 0;
  margin-left: 24px;
`
