import React, { Fragment } from 'react'
import { get } from 'lodash'
import {
  PackageDetailContainer,
  PackageSelection
} from 'components'
import {
  Container,
  Content,
  Title,
  ActionContainer,
  ChoosePackageButton,
  BackButton,
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

const Desktop = (props: IProps) => {
  const onBackClicked = () => {
    // tslint:disable-next-line: no-console
    console.log('Clicked on back button!')
  }

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
                const buttonText = `${isSelected ? 'Selected:' : 'Upgrade to'} 
                  ${get(item, 'name')} for ${isSelected ? '+' : ''}
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
                      // tslint:disable-next-line: jsx-no-lambda
                      onClick={props.onPackageClick}
                      isSelected={isSelected}
                      buttonText={buttonText}
                      {...item}
                    />
                  </Fragment>
                )
              })
            }
          </PackageItemContainer>
          <ActionContainer>
            <BackButton onClick={onBackClicked}>
              Back
            </BackButton>
            <ChoosePackageButton>
              {`Choose ${props.selectedPackage}`}
            </ChoosePackageButton>
          </ActionContainer>
        </Content>
      </Container>
    </Fragment>
  )
}

export default Desktop
