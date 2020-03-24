import React from 'react'
import { get } from 'lodash'
import {
  Container,
  PackageWrapper,
  PackageContainer,
  PriceContainer,
  ButtonContainer,
  MoreButton,
  ServiceContainer,
  ServiceItem,
  ServiceIcon,
  ServiceName,
  PackageHeaderContainer,
  PackageHeaderIcon,
  PackageHeaderText,
} from './style'
import { color } from 'themes'

interface IService {
  name: string
}

interface IPackage {
  id: string
  name: string
  price: string | number
  services: any
  color?: string
  background?: string
}

interface IProps {
  checkmark: string
  logo: string
  currency: string
  item: IPackage

  buttonText?: string
  onClick: (data?: any) => void
}

const priceComponent = (
  price: string | number,
  currencyIcon: string,
) => {
  return `${price} ${currencyIcon}`
}

const Desktop = (props: IProps) => {
  const { currency, checkmark, logo, item, onClick, buttonText } = props

  return (
    <Container>
      <PackageWrapper>
        <PackageContainer
          key={get(item, 'id')}
        >
          <PackageHeaderContainer
            color={color.mainBlue}
          >
            <PackageHeaderIcon>
              <img
                alt='EDUBAO logo'
                src={logo}
              />
            </PackageHeaderIcon>
            <PackageHeaderText>
              {`+ ${get(item, 'title')}`}
            </PackageHeaderText>
          </PackageHeaderContainer>
          <ServiceContainer>
            {
              get(item, 'services', []).map(
                (serviceItem: IService) => {

                  return (
                    <ServiceItem key={get(serviceItem, 'name')}>
                      <ServiceIcon>
                        <img
                          alt='edubao checkmark blue'
                          src={checkmark}
                        />
                      </ServiceIcon>
                      <ServiceName>
                        {get(serviceItem, 'name')}
                      </ServiceName>
                    </ServiceItem>
                  )
                })
            }
          </ServiceContainer>
          <PriceContainer>
            {priceComponent(get(item, 'price'), currency)}
          </PriceContainer>
          <ButtonContainer>
            <MoreButton
              // tslint:disable-next-line: jsx-no-lambda
              onClick={() => onClick(item)}
            >
              {buttonText}
            </MoreButton>
          </ButtonContainer>
        </PackageContainer>
      </PackageWrapper>
    </Container>
  )
}

export default Desktop
