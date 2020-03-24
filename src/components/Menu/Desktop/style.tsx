import React from 'react'
import styled from 'styled-components'
import {Button} from 'components'
import {color, spacing} from 'themes'
import {media} from 'utils'
import logo from 'logo.svg'

export const Wrapper = styled.header`
  width: 100%;
`

export const Header = styled.div`
  background-color: ${color.mainBlue};
  padding: 0 calc(50% - 610px);
  ${media.large} {
    padding: 0 ${spacing.desktop.bodyPadding};
  }
  height: 32px;
  display: flex;
  justify-content: flex-end;
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
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  margin-left: 48px;
`

export const Bar = styled.div`
  background-color: ${color.white};
  padding: 0 calc(50% - 610px);
  ${media.large} {
    padding: 0 ${spacing.desktop.bodyPadding};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.a`
width: 125px;
height: 32px;
background: transparent url('${logo}') 0% 0% no-repeat padding-box;
background-size: cover;
`

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Item = styled.a`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  width: fit-content;
  padding: 24px;
  &&:hover {
    text-decoration: underline;
  }
`
export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  min-width: 300px;
  flex-wrap: wrap;
`

export const SubItem = styled.div`
  flex: 0 0 150px;
  text-align: right;
  margin: 14px 0;
`

export const Link = styled.a`
  text-align: right;
  font-size: 12px;
  font-weight: bold;
  line-height: 24px;
  white-space: nowrap;
  padding: 0 12px;
  width: fit-content;
  &&:hover {
    text-decoration: underline;
  }
`

export const GetApp = styled((props: any) => <Button {...props} />)`
  margin: 0 24px;
`

export const Languages = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  color: ${color.mainBlue};
  margin-left: 24px;
`

export const Country = styled.span`
  cursor: pointer;
  &&:hover {
    text-decoration: underline;
  }
`

export const Slash = styled.span`
  margin: 0 5px;
`

export const Underline = styled.span`
  text-decoration: underline;
`
