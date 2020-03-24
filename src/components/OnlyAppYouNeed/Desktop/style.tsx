import styled from 'styled-components'
import {color as themeColor} from 'themes'

export const Container = styled.section`
  height: 762px;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: row;
`

export const MarginContainer = styled.div`
  margin-left: 32px;
`

export const HeaderContainer = styled.div`
  margin-top: 153px;
`

export const Title = styled.span`
  max-height: 91px;
  font: Bold 32px/48px Nunito;
  color: ${themeColor.mainBlue};
  margin-bottom: 24px;
`

export const Description = styled.div`
  max-height: 48px;
  font-weight: regular;
  font-size: 18px;
  line-height: 24px;
  color: ${({color}) => color || themeColor.fontBlue};
  flex: 1;
`

export const GetAppForFree = styled.div`
  font-weight: regular;
  font-size: 18px;
  line-height: 24px;
  color: ${({color}) => color || themeColor.fontBlue};
  margin-bottom: 14px;
`

export const StoreBackground = styled.div`
  border-radius: 16px;
  width: 48px;
  height: 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #0000000a;

  &&:first-child {
    margin-right: 24px;
  }
`

export const AppStoreContainer = styled.div`
  margin-top: 101px;  
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    transition: all .2s ease-in-out;
  }
`

export const AppFeed = styled.div``
