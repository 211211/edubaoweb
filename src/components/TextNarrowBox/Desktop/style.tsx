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
  max-width: 400px;
  height: fit-content;
  flex: 1 1;
`

export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0 0 16px #0000000b;
  border-radius: 16px;
  padding: 70px 48px;
  width: 280px;
`

export const CardTitle = styled.div`
  text-align: center;
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  letter-spacing: 0;
`

export const PriceWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
`

export const Price = styled.div`
  text-align: center;
  font-size: 32px;
  line-height: 24px;
  color: ${color.fontBlue};
  letter-spacing: 0;
`

export const Text = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 32px;
  color: ${color.fontBlue};
  letter-spacing: 0;
`
