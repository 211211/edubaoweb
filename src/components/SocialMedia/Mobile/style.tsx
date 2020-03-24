import styled from 'styled-components'

import {color} from 'themes'

interface IImage {
  readonly url?: string
}

export const Wrapper = styled.section`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  padding: 32px;
  padding-bottom: 8px;
`

export const Buttons = styled.div`
  margin-bottom: 24px;
  max-width: 240px;
  display: flex;
  flex-wrap: wrap;
`

export const Button = styled.span`
  margin: 24px;
`

export const Images = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const setImage = ({url}: IImage): string => {
  return `
    background: ${color.white} url("${url}");
  `
}

export const Image = styled.a<IImage>`
  ${setImage}
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
