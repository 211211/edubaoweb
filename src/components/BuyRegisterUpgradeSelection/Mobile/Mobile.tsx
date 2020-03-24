import React, { Fragment, useState } from 'react'
import { get } from 'lodash'
import { PackageDetailContainer, PackageSelection } from 'components'
import {
  Container,
  Content,
  ActionContainer,
  ChoosePackageButton,
  BackLink,
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
) => {
  return `${price} ${currency}`
}

const Mobile = (props: IProps) => {
  const [
    selectedSituation,
    setSelectedSituation
  ] = useState<string>('')

  const [
    selectedPackage,
    setSelectedPackage
  ] = useState<string>(get(props, 'packages[0].name'))

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
              const buttonText: string = `${isSelected ? 'Selected:' : 'Get + '} ${get(item, 'name')}`
              const price: string | number = `${isSelected ? '+' : ''}
                ${priceComponent(get(item, 'price'), get(item, 'currency'))}`

              return (
                <StyledPackageDetailContainer key={get(item, 'id')}>
                  <PackageDetailContainer
                    {...item}
                    // tslint:disable-next-line: jsx-no-lambda
                    onClick={onPackageClicked}
                    isSelected={isSelected}
                    buttonText={buttonText}
                    price={price}                    

                  />
                </StyledPackageDetailContainer>
              )
            })
          }
          <ActionContainer>
            <ChoosePackageButton>
              {`Save my ${selectedPackage}`}
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
