import styled from 'styled-components'
import { color as themeColor } from 'themes'

export const Container = styled.section`
  max-width: 320px;
  padding: 16px 32px;
  display: flex;
  flex: 1;
  margin: auto;
  flex-direction: column;
  font-family: 'Nunito';
`

export const Title = styled.div`
  text-align: center;
  font-size: 21px;
  line-height: 32px;
  font-weight: bold;
  padding: 32px;
  color: ${themeColor.mainBlue};
`

export const JobContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const JobItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 32px;
`

export const JobIcon = styled.div`
  margin-right: 33px;
  cursor: pointer;
`

export const JobContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const JobPositionTitle = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  opacity: 0.8;

  &&:hover {
    opacity: 1;
    transition: all .2s ease-in-out;
  }
`

export const JobAddress = styled.div`
  flex: 1;
  font-style: Italic;
  font-size: 12px;
  line-height: 16px;

  cursor: pointer;
  opacity: 0.8;

  &&:hover {
    opacity: 1;
    transition: all .2s ease-in-out;
  }
`

export const Description = styled.div`
  text-align: center;
  max-height: 48px;
  font-weight: regular;
  font-size: 12px;
  line-height: 16px;
  color: ${({ color }) => color || themeColor.mainBlue};
  flex: 1;

  a {
    text-decoration: underline;
    opacity: 0.8;

    &:hover {
      opacity: 1;
      transition: all .2s ease-in-out;
    }
  }
`
