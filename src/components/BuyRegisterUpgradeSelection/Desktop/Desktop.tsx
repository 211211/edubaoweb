import React, { Fragment, useState } from 'react'
import { get } from 'lodash'
import { PackageSelection, PackageDetailContainer } from 'components'
import {
  Container,
  Content,
  ActionContainer,
  ChoosePackageButton,
  BackButton,
  StyledPackageDetailContainer,
} from './style'

interface IProps {
  title: string
  situations: string[]
  packages: object[]
}

const priceComponent = (
  price: string | number,
  currency: string,
  subscriptionType: string
) => {
  return `${price} ${currency} / ${subscriptionType}`
}

const Desktop = (props: IProps) => {
  const [
    selectedSituation,
    setSelectedSituation
  ] = useState<string>('')

  const [
    selectedPackage,
    setSelectedPackage
  ] = useState<string>(get(props, 'packages[0].name'))

  const onBackClicked = () => {
    // tslint:disable-next-line: no-console
    console.log('Clicked on back button!')
  }

  const onSituationClicked = (value: string) => {
    setSelectedSituation(value)
  }

  const onPackageClicked = (value: string) => {
    setSelectedPackage(value)
  }

  return (
    <Fragment>
      <PackageSelection
        title={props.title}
        situations={props.situations}
        selectedSituation={selectedSituation}
        onClick={onSituationClicked}
      />
      <Container>
        <Content>
          {
            props.packages.map((item) => {
              const isSelected: boolean =
                selectedPackage === get(item, 'name')
              const buttonText = `${isSelected ? 'Selected:' : 'Choose + '} 
                  ${get(item, 'name')} for ${isSelected ? '+' : ''}
                  ${priceComponent(get(item, 'price'), get(item, 'currency'), get(item, 'subscription'))}`

              return (
                <StyledPackageDetailContainer key={get(item, 'name')}>
                  <PackageDetailContainer
                    compact={true}
                    // tslint:disable-next-line: jsx-no-lambda
                    onClick={onPackageClicked}
                    isSelected={isSelected}
                    buttonText={buttonText}
                    {...item}
                  />
                </StyledPackageDetailContainer>
              )
            })
          }
          <ActionContainer>
            <BackButton onClick={onBackClicked}>
              Back
          </BackButton>
            <ChoosePackageButton>
              {`Save my ${selectedPackage}`}
            </ChoosePackageButton>
          </ActionContainer>
        </Content>
      </Container>
    </Fragment>
  )
}

export default Desktop
