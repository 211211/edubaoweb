import React from 'react'
import styled from 'styled-components'
import {Icon} from 'antd'

import {color} from 'themes'

interface IImage {
  readonly image?: string
}
interface IList {
  readonly symmetry?: boolean
  readonly isFirst?: boolean
}
interface IItem {
  readonly isFirst?: boolean
}

const setImage = ({image}: IImage): string => {
  return `
    background: transparent url("${image}");
  `
}

export const Wrapper = styled.section<IImage>`
  ${setImage}
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const Title = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.white};
  margin-bottom: 24px;
`

export const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${color.error};
  margin-bottom: 32px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

export const TextWrapper = styled.span`
  height: fit-content;
  flex: 1 1;
`

export const Lists = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`

const setSymmetry = ({symmetry, isFirst}: IList): string => {
  return `
    height: ${symmetry ? 'auto' : 'fit-content'};
    margin-bottom: ${isFirst ? '24px' : 0};
  `
}

export const List = styled.div<IList>`
  ${setSymmetry}
  padding: 42px 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0 0 16px #0000000b;
  border-radius: 16px;
  width: 280px;
`

const setSpace = ({isFirst}: IItem): string => {
  return `
    margin-top: ${isFirst ? '0' : '24px'};
  `
}

export const Item = styled.div<IItem>`
  ${setSpace}
  display: flex;
`

export const CheckIcon = styled((props: any) => <Icon {...props} />)`
  font-size: 24px;
  color: #054f7c;
`

export const Text = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: ${color.mainBlue};
  letter-spacing: 0;
  margin-left: 24px;
  font-weight: bold;
`
