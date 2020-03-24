import React from 'react'
import styled from 'styled-components'
import {Icon} from 'antd'

import {color} from 'themes'

interface IImage {
  readonly image?: string
}

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 24px;
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
  color: ${color.fontBlue};
  margin-bottom: 80px;
  text-align: center;
  max-width: 592px;
`

const setImage = ({image}: IImage): string => {
  return `
    background: ${color.white} url("${image}");
  `
}

export const Image = styled.img<IImage>`
  ${setImage}
  width: 100%;
  height: auto;
  padding-top: 60%;
  border-radius: 16px 16px 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const Content = styled.div`
  display: flex;
  max-width: 1008px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Highlight = styled.a`
  background-color: ${color.white};
  box-shadow: 0px 0px 16px #0000000b;
  border-radius: 16px;
  width: 60%;
  height: fit-content;
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

export const Header = styled.div`
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
`

export const SubDescription = styled.div`
  color: ${color.fontBlue};
  margin-top: 16px;
  font-size: 16px;
  line-height: 22px;
`

export const SubArticles = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(40% - 32px);
  height: fit-content;
`

export const HighlightArticle = styled.div`
  padding: 24px;
`

export const Article = styled.a`
  padding: 24px;
  background-color: ${color.white};
  box-shadow: 0px 0px 16px #0000000b;
  border-radius: 16px;
  margin-top: 24px;
`
