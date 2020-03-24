import styled from 'styled-components'

import {color} from 'themes'

interface IImage {
  readonly url?: string
}

export const Wrapper = styled.section`
  background-color: ${color.white};
  display: flex;
  justify-content: center;
  padding: 80px;
`

export const Content = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  max-width: 1008px;
`

export const TitleWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.span`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  width: 49%;
`

export const Buttons = styled.span`
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  margin-right: -16px;
  justify-content: flex-end;
  width: 49%;
`

export const Button = styled.span`
  margin: 16px;
  height: fit-content;
`

export const Images = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a:last-child {
    margin-right: 0;
  }
`

const setImage = ({url}: IImage): string => {
  return `
    background: ${color.white} url("${url}");
  `
}

export const Image = styled.a<IImage>`
  ${setImage}
  flex: 0 0 176px;
  width: 176px;
  height: 176px;
  margin-top: 32px;
  margin-right: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
