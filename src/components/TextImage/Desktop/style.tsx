import styled from 'styled-components'

import {color} from 'themes'

interface IImage {
  readonly image?: string
}

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 24px;
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
  color: ${color.error};
  max-width: 592px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1008px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.span`
  width: 48%;
  max-width: 380px;
  height: fit-content;
`

const setImage = ({image}: IImage): string => {
  return `
    background: #C8EDFF url("${image}");
  `
}

export const ImageWrapper = styled.div`
  flex: 0 0 50%;
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
