import styled from 'styled-components'

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
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  color: ${color.white};
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
  width: 100%;
  height: fit-content;
  margin-bottom: 32px;
`

export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0 0 16px #0000000b;
  border-radius: 16px;
  padding: 32px 16px;
  width: 100%;
`

export const CardTitle = styled.div`
  text-align: center;
  font-size: 21px;
  line-height: 18px;
  font-weight: bold;
  color: ${color.mainBlue};
  letter-spacing: 0;
`

export const PriceWrapper = styled.div`
  text-align: center;
  margin-top: 32px;
`

export const Price = styled.div`
  text-align: center;
  font-size: 21px;
  line-height: 28px;
  color: ${color.fontBlue};
  letter-spacing: 0;
`

export const Text = styled.div`
  text-align: center;
  font-size: 21px;
  line-height: 32px;
  color: ${color.fontBlue};
  letter-spacing: 0;
`
