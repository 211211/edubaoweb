import styled from 'styled-components'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 24px 0 24px;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 1008px;
  width: 100%;
`

export const TextWrapper = styled.div`
  display: flex;
  max-width: 1008px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Title = styled.div`
  flex: 0 0 calc(70% - 32px);
  max-width: 488px;
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
`

export const Download = styled.div`
  flex: 0 0 30%;
`

export const Label = styled.div`
  font-size: 18px;
  line-height: 24px;
  margin: 12px;
  color: ${color.fontBlue};
  text-transform: uppercase;
`

export const ButtonWrapper = styled.div`
  display: flex;
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
  margin: 12px;
`

export const Icon = styled.img``

export const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 280px;
  height: 350px;
`
