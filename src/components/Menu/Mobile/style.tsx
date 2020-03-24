import styled from 'styled-components'

import {color, spacing} from 'themes'
import logo from 'logo.svg'

export const Wrapper = styled.header``

export const Header = styled.div`
  background-color: ${color.mainBlue};
  padding: 0 calc(${spacing.mobile.bodyPadding} - 8px);
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &&::-webkit-scrollbar {
    display: none;
  }
`

export const HeaderItem = styled.a`
  color: ${color.white};
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  line-height: 14px;
  margin: 0 8px;
`

export const Bar = styled.div`
  background-color: ${color.white};
  padding: ${spacing.mobile.bodyPadding};
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.a`
  width: 94px;
  height: 24px;
  background: transparent url('${logo}') 0% 0% no-repeat padding-box;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`

export const Groups = styled.div``

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`

export const GroupTitle = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  color: ${color.mainBlue};
  text-decoration: underline;
  text-transform: uppercase;
`

export const Item = styled.a`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 24px;
  width: fit-content;
  margin-top: 20px;
`

export const Languages = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  margin: 48px auto;
  color: ${color.mainBlue};
`

export const Country = styled.span`
  cursor: pointer;
  &&:hover {
    text-decoration: underline;
  }
`

export const Slash = styled.span`
  margin: 0 16px;
`

export const Underline = styled.span`
  text-decoration: underline;
`
