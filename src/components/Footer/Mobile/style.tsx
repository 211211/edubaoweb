import React from 'react'
import styled from 'styled-components'

import {Input, Button} from 'components'
import {color, spacing} from 'themes'

export const Wrapper = styled.footer`
  padding: 32px ${spacing.mobile.bodyPadding};
  background-color: ${color.mainBlue};
  color: ${color.white};
`

export const Header = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Description = styled.div`
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 16px;
`

export const EmailInput = styled((props: any) => <Input {...props} />)`
  && {
    margin-bottom: 16px;
    opacity: 0.5;
  }
`

export const SubscribeButton = styled((props: any) => <Button {...props} />)`
  && {
    margin-bottom: 32px;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Group = styled.div`
  width: 180px;
  margin-bottom: 64px;
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
