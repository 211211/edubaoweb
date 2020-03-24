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

const Mobile = (props: IProps) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <ServicesContainer>
        {
          props.services.map((service: any) =>
            <ServiceItemContainer key={service.id}>
              <ServiceItem  {...service} />
            </ServiceItemContainer>
          )
        }
      </ServicesContainer>
    </Container>
  )
}

export default Mobile
