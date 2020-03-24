import React, { useState } from 'react'
import { get, includes } from 'lodash'
import {
  Container,
  PackageContainer,
  PackageIcon,
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
  magnified?: boolean

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

const Desktop = (props: IPackage) => {
  const [isMagnified] = useState<boolean>(props.magnified === true)

  const ignoredService = (blacklist: string[], serviceId: string) => {
    return !includes(blacklist, serviceId)
  }

  const { services = [] } = props

  return (
    <Container>
      <PackageContainer
        key={get(props, 'id')}
        backgroundColor={get(props, 'backgroundColor')}
        color={get(props, 'color')}
        className={
          isMagnified ? 'magnified' : ''
        }
      >
        <PackageHeaderContainer
          color={
            isMagnified
              ? color.white
              : color.mainBlue
          }
        >
          <PackageHeaderIcon>
            <img
              alt='EDUBAO blue large logo'
              src={get(props, 'logo')}
            />
          </PackageHeaderIcon>
          <PackageHeaderText
            className={
              isMagnified ? 'magnified' : ''
            }
            color={get(props, 'color')}
          >
            {get(props, 'title')}
          </PackageHeaderText>
        </PackageHeaderContainer>
        <PackageIcon
          className={isMagnified ? 'magnified' : ''}
        >
          <img
            alt={get(props, 'name')}
            src={get(props, 'icon')}
          />
        </PackageIcon>
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
                        alt='edubao checkmark white'
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
                      className={
                        isMagnified ? 'magnified' : ''
                      }
                    >
                      {get(serviceItem, 'name')}
                    </ServiceName>
                  </ServiceItem>
                )
              })
          }
        </ServiceContainer>
        <PriceContainer
          className={
            isMagnified ? 'magnified' : ''
          }
        >
          {
            priceComponent(
              get(props, 'price'),
              get(props, 'currencySign'),
              get(props, 'subscription')
            )
          }
        </PriceContainer>
        <ButtonContainer
          className={
            isMagnified ? 'magnified' : ''
          }
        >
          <MoreButton
            type={get(props, 'buttonType')}
            className={isMagnified ? 'magnified' : ''}
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

Desktop.defaultProps = {
  id: '',
  name: '',
  title: '',
  icon: '',
  price: '0',
  services: [],
  backgroundColor: '',
  description: '',
  currencySign: '€',
  currencyCode: '',
  subscription: 'month',
  checkmark: '',
  logo: '',
  magnified: false,
  buttonText: 'Read more',
}

export default Desktop
