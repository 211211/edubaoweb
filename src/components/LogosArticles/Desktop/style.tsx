import React from 'react'
import styled from 'styled-components'
import {Icon} from 'antd'

import {color} from 'themes'

interface IImage {
  readonly image?: string
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
  color: ${color.mainBlue};
  margin-bottom: 24px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1008px;
  justify-content: space-between;
  align-items: center;
`

export const TextWrapper = styled.span`
  max-width: 400px;
  height: fit-content;
  flex: 1 1 auto;
`

export const LogosWrapper = styled.div``

export const LogoTitle = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: ${color.fontBlue};
  margin-bottom: 16px;
`

export const Logos = styled.div`
  display: flex;
  align-items: center;
  margin: -8px;
`

export const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 8px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background: ${color.mainBlue} 0% 0% no-repeat padding-box;
  opacity: 0.5;
`

export const Logo = styled.img`
  width: auto;
  height: 100%;
`

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Label = styled.div`
  color: #17a9b5;
  margin-left: 16px;
  text-transform: capitalize;
  font-size: 14px;
  line-height: 19px;
  font-weight: bold;
`

export const IconStyled = styled((props: any) => <Icon {...props} />)`
  font-size: 24px;
  color: #17a9b5;
`

export const ArticleTitle = styled.div`
  color: ${color.mainBlue};
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
`

export const SubTitle = styled.div`
  color: ${color.mainBlue};
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
`

export const SubLabel = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const ArticlesWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
  max-width: 400px;
  height: fit-content;
`

export const Article = styled.a`
  padding: 24px;
  background-color: ${color.white};
  box-shadow: 0px 0px 16px #0000000b;
  border-radius: 16px;
  margin-top: 24px;
`
