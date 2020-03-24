import React from 'react'
import {
  Container,
  Title,
  JobContainer,
  JobItemContainer,
  JobIcon,
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

const Desktop = (props: IProps) => {
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
                <img alt='right-narrow-hiring' src={icon} />
              </JobIcon>
              <JobPositionTitle>{jobTitle}</JobPositionTitle>
              <JobAddress>{address}</JobAddress>
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

export default Desktop
