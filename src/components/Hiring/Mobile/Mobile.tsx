import React from 'react'
import {
  Container,
  Title,
  JobContainer,
  JobItemContainer,
  JobIcon,
  JobContentWrapper,
  JobPositionTitle,
  JobAddress,
  Description,
} from './style'

interface IPosition {
  title: string
  address: string
}

interface IProps {
  title: string
  icon: string
  positions: IPosition[]
  description: string
}

const Mobile = (props: IProps) => {
  const {title, icon, positions, description} = props
  const rawMarkup = (text: string) => {
    return {__html: text}
  }
  return (
    <Container>
      <Title>{title}</Title>
      <JobContainer>
        {positions.map(({title: jobTitle, address}: IPosition) => {
          return (
            <JobItemContainer key={jobTitle}>
              <JobIcon>
                <img
                  style={{
                    marginBottom: 10,
                  }}
                  alt='right-narrow-hiring'
                  src={icon}
                />
              </JobIcon>
              <JobContentWrapper>
                <JobPositionTitle>{jobTitle}</JobPositionTitle>
                <JobAddress>{address}</JobAddress>
              </JobContentWrapper>
            </JobItemContainer>
          )
        })}
      </JobContainer>
      <Description>
        <div dangerouslySetInnerHTML={rawMarkup(description)} />
      </Description>
    </Container>
  )
}

export default Mobile
