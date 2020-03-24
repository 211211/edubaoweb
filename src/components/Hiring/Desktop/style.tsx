import styled from 'styled-components'
import { color as themeColor } from 'themes'

export const Container = styled.section`
  max-width: 1280px;
  padding: 80px 31px;
  display: flex;
  flex: 1;
  margin: auto;
  flex-direction: column;
  font-family: 'Nunito';
`

export const Title = styled.span`
  max-height: 43px;
  font: Bold 32px/48px Nunito;
  color: ${themeColor.mainBlue};
  margin-bottom: 24px;
`

export const JobContainer = styled.div`
  margin: auto;
  margin-top: 48px;
  min-width: 500px;
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

  &&:last-child {
    margin-bottom: 0;
  }
`

export const JobIcon = styled.div`
  margin-right: 33px;
`

export const JobPositionTitle = styled.div`
  max-width: 400px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;

  cursor: pointer;
  opacity: 0.8;

  &&:hover {
    opacity: 1;
    transition: all .2s ease-in-out;
  }
`

export const JobAddress = styled.div`
  align-items: flex-end;
  flex: 1;
  text-align: right;
  font-style: Italic;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  opacity: 0.8;

  &&:hover {
    opacity: 1;
    transition: all .2s ease-in-out;
  }
`

export const Description = styled.div`
  max-width: 550px;
  text-align: center;
  margin: 73px auto 80px auto;
  max-height: 61px;
  font-weight: regular;
  font-size: 18px;
  line-height: 24px;
  color: ${({ color }) => color || themeColor.fontBlue};
  flex: 1;

  a {
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.8;

    &&:hover {
      opacity: 1;
      transition: all .2s ease-in-out;
    }
  }
`
