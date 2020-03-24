import styled from 'styled-components'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 32px 32px 0 32px;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 1008px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1008px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Title = styled.div`
  width: 100%;
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
`

export const Download = styled.div`
  width: 100%;
`

export const Label = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${color.fontBlue};
  text-transform: uppercase;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  margin: 20px 0;
`

export const Button = styled.a`
  background: ${color.white} 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #0000000a;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img``

export const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 280px;
  height: 350px;
`
