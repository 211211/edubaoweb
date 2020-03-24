import styled from 'styled-components'

import {color} from 'themes'

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

export const Titles = styled.div`
  margin-bottom: 24px;
`

export const Title = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
`

export const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${color.mainBlue};
`

export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: center;
`

export const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 280px;
  height: 510px;
`
