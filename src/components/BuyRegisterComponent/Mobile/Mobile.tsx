import React, { Fragment } from 'react'
import { get } from 'lodash'
import { PackageDetailContainer, PackageSelection } from 'components'
import {
  Container,
  Content,
  Title,
  ActionContainer,
  ChoosePackageButton,
  BackLink,
  PackageItemContainer,
} from './style'

interface IProps {
  title: string
  situations: string[]
  selectedSituation: string
  onSituationClick: (value: string) => void
  packages: object[]
  selectedPackage: string
  onPackageClick: (item: any) => void
}

const priceComponent = (
  price: string | number,
  currency: string,
  subscriptionType: string
) => {
  return `${price} ${currency} / ${subscriptionType}`
}

const Mobile = (props: IProps) => {
  return (
    <Fragment>
      <PackageSelection
        title={props.title}
        situations={props.situations}
        selectedSituation={props.selectedSituation}
        onClick={props.onSituationClick}
      />
      <Container>
        <Content>
          <PackageItemContainer>
            {
              props.packages.map((item) => {
                const isSelected: boolean =
                  props.selectedPackage === get(item, 'name')
                const buttonText: string = `${isSelected ? 'Selected:' : 'Upgrade to'} ${get(item, 'name')}`
                const price: string | number = `${isSelected ? '+' : ''}
                  ${priceComponent(get(item, 'price'), get(item, 'currency'), get(item, 'subscription'))}`
                return (
                  <Fragment key={get(item, 'name')}>
                    <Title>
                      {
                        get(item, 'name') === props.selectedPackage
                          ? 'Included'
                          : 'Not included'
                      }
                    </Title>
                    <PackageDetailContainer
                      {...item}
                      // tslint:disable-next-line: jsx-no-lambda
                      onClick={props.onPackageClick}
                      isSelected={props.selectedPackage === get(item, 'name')}
                      buttonText={buttonText}
                      price={price}
                    />
                  </Fragment>
                )
              })
            }
          </PackageItemContainer>
          <ActionContainer>
            <ChoosePackageButton>
              {`Choose ${props.selectedPackage}`}
            </ChoosePackageButton>
            <BackLink href='#'>
              Back
            </BackLink>
          </ActionContainer>
        </Content>
      </Container>
    </Fragment>
  )
}

export default Mobile
