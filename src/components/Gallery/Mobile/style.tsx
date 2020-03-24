import styled from 'styled-components'

import {color} from 'themes'

interface IImage {
  readonly image?: string
}

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 0;
`

export const Images = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  &&::-webkit-scrollbar {
    display: none;
  }
  &&::after {
    content: '';
    height: 1px;
    flex: 0 0 1px;
  }
`

const setImage = ({image}: IImage): string => {
  return `
    background: transparent url("${image}");
    margin-right: 16px;
  `
}

export const Image = styled.div<IImage>`
  ${setImage}
  flex: 0 0 calc(100% - 48px);
  height: auto;
  padding-top: 62%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0 0 16px #0000000b;
  border-radius: 16px;
`
