import React from 'react'
import styled from 'styled-components'
import {Icon} from 'antd'

import {color} from 'themes'

interface IImage {
  readonly image?: string
}
interface IList {
  readonly symmetry?: boolean
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
  padding: 80px 24px;
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
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.white};
  margin-bottom: 24px;
`

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${color.error};
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1008px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const TextWrapper = styled.span`
  max-width: 400px;
  height: fit-content;
  flex: 1 1;
`

export const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: -16px;
`

const setSymmetry = ({symmetry}: IList): string => {
  return `
    height: ${symmetry ? 'auto' : 'fit-content'};
  `
}

export const List = styled.div<IList>`
  ${setSymmetry}
  padding: 42px 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0 0 16px #0000000b;
  border-radius: 16px;
  width: 280px;
  margin: 16px;
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
  font-size: 18px;
  line-height: 24px;
  color: ${color.mainBlue};
  letter-spacing: 0;
  margin-left: 24px;
  font-weight: bold;
`
