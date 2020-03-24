import styled from 'styled-components'

import {color as colors} from 'themes'

interface IIcon {
  readonly icon?: string
}

const setIcon = ({icon}: IIcon): string => {
  return `
    background: ${colors.white} url("${icon}");
  `
}

export const Wrapper = styled.a`
  text-decoration: none;
  background-color: ${colors.mainBlue};
  box-shadow: 0px 0px 16px #0000000b;
  border-radius: 8px;
  width: fit-content;
  min-width: 72px;
  min-height: 72px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled.div<IIcon>`
  ${setIcon}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
`

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.white};
`
