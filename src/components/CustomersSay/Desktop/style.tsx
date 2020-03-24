// import React from 'react'
import styled from 'styled-components'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 80px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .edu-carousel {
    max-width: 750px;
    width: 100%;
  }
`

export const Title = styled.div`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 40px;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Avatars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const AvatarWrapper = styled.div`
  width: 176px;
  height: 176px;
  margin: 16px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`

export const Avatar = styled.img`
  width: auto;
  height: 100%;
`

export const Quote = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-style: italic;
  margin: 48px 0 32px 0;
  color: ${color.fontBlue};
  text-align: center;
`

export const Name = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: ${color.mainBlue};
  text-align: center;
`
