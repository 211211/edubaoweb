import styled from 'styled-components'

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

export const Text = styled.span`
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
  color: ${color.error};
`

const setImage = ({image}: IImage): string => {
  return `
    background: #C8EDFF url("${image}");
  `
}

export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
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