import React from 'react'
import {
  Container,
  Title,
  ServicesContainer,
  ServiceItemContainer,
  ServiceItem,
} from './style'

interface IProps {
  title?: string
  services: any
}

const Desktop = (props: IProps) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <ServicesContainer>
        {
          props.services.map((service: any) =>
            <ServiceItemContainer key={service.text}>
              <ServiceItem  {...service} />
            </ServiceItemContainer>
          )
        }
      </ServicesContainer>
    </Container>
  )
}

export default Desktop
