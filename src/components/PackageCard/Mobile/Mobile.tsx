import React from 'react'
import { get, includes } from 'lodash'
import {
  Container,
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

interface IService {
  name: string
  color?: string
  strikeThrough?: boolean
  ignoreServices?: string[]
}

interface IPackage {
  id: string
  name: string
  title: string
  icon: string
  price: string | number
  services: IService[]
  backgroundColor?: string

  description?: string
  currencySign: string
  currencyCode?: string
  subscription: string
  checkmark?: string
  logo?: string

  buttonText?: string
  buttonType?: string
  onClick: (data?: any) => void
}

const priceComponent = (
  price: string | number,
  currencyIcon: string,
  subscriptionType: string
) => {
  return `${price} ${currencyIcon} / ${subscriptionType}`
}

const Mobile = (props: IPackage) => {
  const ignoredService = (blacklist: string[], serviceId: string) => {
    return !includes(blacklist, serviceId)
  }

  const { services = [] } = props

  return (
    <Container>
      <PackageContainer
        backgroundColor={get(props, 'backgroundColor')}
        color={get(props, 'color')}
      >
        <PackageHeaderContainer
          color={get(props, 'color')}
        >
          <PackageHeaderIcon>
            <img
              alt='EDUBAO logo'
              src={get(props, 'logo')}
            />
          </PackageHeaderIcon>
          <PackageHeaderText
            color={get(props, 'color')}
          >
            {get(props, 'title')}
          </PackageHeaderText>
        </PackageHeaderContainer>
        <ServiceContainer>
          {
            services.map(
              (serviceItem: IService) => {
                const isIgnored = ignoredService(
                  get(serviceItem, 'ignoreServices', []),
                  get(props, 'id', '')
                )

                return (
                  <ServiceItem key={get(serviceItem, 'name')}>
                    <ServiceIcon>
                      <img
                        alt='edubao checkmark blue'
                        src={get(props, 'checkmark')}
                      />
                    </ServiceIcon>
                    <ServiceName
                      strike={
                        get(serviceItem, 'strikeThrough', false)
                        || !isIgnored
                      }
                      color={
                        get(serviceItem, 'color', undefined)
                        || get(props, 'color')
                      }
                    >
                      {get(serviceItem, 'name')}
                    </ServiceName>
                  </ServiceItem>
                )
              })
          }
        </ServiceContainer>
        <PriceContainer>
          {
            priceComponent(
              get(props, 'price'),
              get(props, 'currencySign'),
              get(props, 'subscription'),
            )
          }
        </PriceContainer>
        <ButtonContainer>
          <MoreButton
            type={get(props, 'buttonType')}
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => props.onClick(props)}
          >
            {get(props, 'buttonText')}
          </MoreButton>
        </ButtonContainer>
      </PackageContainer>
    </Container>
  )
}

export default Mobile
