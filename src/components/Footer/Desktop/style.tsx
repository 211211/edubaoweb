import React from 'react'
import styled from 'styled-components'

import {Input, Button} from 'components'
import {color, spacing} from 'themes'
import {media} from 'utils'

export const Wrapper = styled.footer`
  width: 100%;
  padding: 40px calc(50% - 610px);
  background-color: ${color.mainBlue};
  color: ${color.white};
  ${media.large} {
    padding: 40px ${spacing.desktop.bodyPadding};
  }
`

export const Contents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${media.custom(850)} {
    flex-wrap: wrap;
  }
`

export const Subscribes = styled.div`
  margin-right: 32px;
  margin-top: 40px;
  flex: 0 0 auto;
`

export const Texts = styled.div`
  margin-bottom: 32px;
  max-width: 280px;
`

export const Header = styled.div`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
`

export const Inputs = styled.div``

export const EmailInput = styled((props: any) => <Input {...props} />)`
  && {
    margin-right: 32px;
    opacity: 0.5;
    width: 235px;
    display: inline-block;
  }
`

export const SubscribeButton = styled((props: any) => <Button {...props} />)`
  && {
    width: 125px;
    display: inline-block;
  }
`

export const Links = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const Group = styled.div`
  width: 150px;
  margin: 0 5px 64px 5px;
  display: flex;
  flex-direction: column;
`

export const GroupTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 16px;
  font-weight: bold;
  text-transform: uppercase;
`

export const Link = styled.a<{isText?: boolean}>`
  font-size: 12px;
  line-height: 18px;
  color: ${color.white};
  pointer-events: ${({isText}) => isText ? 'none' : 'auto'}
`

export const NewLine = styled.div`
  margin: 10px;
`

export const Copyright = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  margin: 0 -8px;
`
