import styled from 'styled-components'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const Titles = styled.div`
  margin-bottom: 40px;
`

export const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
`

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${color.mainBlue};
  max-width: 592px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.span`
  flex: 1 1;
  max-width: 380px;
  height: fit-content;
`

export const ImageWrapper = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-end;
`

export const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 280px;
  height: 510px;
`
