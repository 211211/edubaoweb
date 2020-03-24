import styled from 'styled-components'

import {color} from 'themes'

interface ILogo {
  readonly logo?: string
}

export const Wrapper = styled.section`
  padding-bottom: 80px;
  max-width: 1280px;
  margin: auto;
  background-color: ${color.background};
`

export const Title = styled.h3`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
`

export const Partners = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Partner = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
`

export const LogoWrapper = styled.a`
  width: 184px;
  height: 184px;
  background-color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

const setImage = ({logo}: ILogo): string => {
  return `
    background: ${color.white} url("${logo}");
  `
}

export const Logo = styled.div<ILogo>`
  ${setImage}
  height: 50%;
  width: calc(100% - 24px);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export const Label = styled.label`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-top: 40px;
`
