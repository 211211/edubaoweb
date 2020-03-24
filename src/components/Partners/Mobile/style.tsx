import styled from 'styled-components'

import {color} from 'themes'

interface ILogo {
  readonly logo?: string
}

export const Wrapper = styled.section`
  padding: 32px 16px;
  background-color: ${color.background};
`

export const Title = styled.h3`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
  text-align: center;
`

export const Partners = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Partner = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  width: 50%;
`

export const LogoWrapper = styled.a`
  width: 111px;
  height: 111px;
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
  width: calc(100% - 16px);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export const Label = styled.label`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-top: 16px;
`
