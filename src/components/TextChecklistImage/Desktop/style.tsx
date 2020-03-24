import React from 'react'
import styled from 'styled-components'
import {Icon} from 'antd'

import {color} from 'themes'

interface IImage {
  readonly image?: string
}

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
`

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${color.fontBlue};
  margin-bottom: 24px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1216px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const TextWrapper = styled.span`
  flex: 1 1 50%;
  height: fit-content;
  padding-right: 32px;
`

const setImage = ({image}: IImage): string => {
  return `
    background: #C8EDFF url("${image}");
  `
}

export const ImageWrapper = styled.div`
  flex: 1 1 50%;
  min-width: 400px;
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
  padding-top: 8px;
`

export const Item = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const CheckIcon = styled((props: any) => <Icon {...props} />)`
  font-size: 24px;
  color: ${color.fontBlue};
`

export const Text = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${color.fontBlue};
  letter-spacing: 0;
  margin-left: 24px;
`
