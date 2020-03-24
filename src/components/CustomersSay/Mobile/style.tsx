// import React from 'react'
import styled from 'styled-components'

import {color} from 'themes'

export const Wrapper = styled.section`
  background-color: ${color.background};
  padding: 40px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .edu-carousel {
    max-width: 750px;
    width: 100%;
    .prev-icon,
    .next-icon {
      top: 54px;
    }
  }
`

export const Title = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  color: ${color.mainBlue};
  margin-bottom: 32px;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const AvatarWrapper = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`

export const Avatar = styled.img`
  width: auto;
  height: 100%;
`

export const Quote = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  margin: 24px 0 16px 0;
  color: ${color.fontBlue};
  text-align: center;
`

export const Name = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  margin-bottom: 32px;
  color: ${color.mainBlue};
  text-align: center;
`
