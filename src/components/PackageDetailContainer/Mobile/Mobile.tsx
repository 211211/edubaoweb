import React from 'react'
import { get } from 'lodash'
import { PackageDetailCard } from 'components'
import {
  Container,
  Content,
  HeadLine,
  HeadLineIcon,
  HeadLineText,
  Description,
  StyledButton,
  PackageContainer,
  PriceContainer,
} from './style'

interface IProps {
  background?: string
  logo?: string
  name: string
  color?: string
  description?: string
  price: string | number
  currency: string
  subscription: string
  isSelected: boolean
  services: object[]
  buttonBackground?: string
  buttonColor?: string
  buttonText?: string
  onClick: (value: string) => void
  compact?: boolean
}

const Mobile = (props: IProps) => {
  return (
    <Container background={props.background}>
      <Content>
        <HeadLine>
          <HeadLineIcon>
            <img
              alt='EDUBAO blue logo'
              src={get(props, 'logo')}
            />
          </HeadLineIcon>
          <HeadLineText color={props.color}>
            {get(props, 'name')}
          </HeadLineText>
        </HeadLine>
        {
          props.description && (
            <Description
              color={props.color}
            >
              {get(props, 'description')}
            </Description>
          )
        }
        <PackageContainer>
          {
            props.services.map((item) => (
              <PackageDetailCard
                compact={props.compact}
                key={get(item, 'headline')}
                {...item}
              />
            ))
          }
        </PackageContainer>
        <PriceContainer color={props.color}>
          {props.price}
        </PriceContainer>
        <StyledButton
          background={props.buttonBackground}
          color={props.buttonColor}
          type={props.isSelected ? 'primary' : ''}
          // tslint:disable-next-line: jsx-no-lambda
          onClick={() => props.onClick(get(props, 'name'))}
        >
          {props.buttonText}
        </StyledButton>
      </Content>
    </Container>
  )
}

export default Mobile
