import React from 'react'
import { get } from 'lodash'
import {
  Container,
  PackageDescriptionContainer,
  Title,
  Description,
  SituationContainer,
  SituationButton,
  PackageWrapper,
} from './style'
import { PackageCard } from 'components'

interface IProps {
  title: string
  description: string
  currencySign: string
  currencyCode?: string
  situations: string[]
  selectedSituation: string
  onSituationClick: (value: string) => void
  subscription: string
  packages: object[]

  buttonText?: string
  onClick: (data?: any) => void
}

const Desktop = (props: IProps) => {
  const {
    title, description, situations, selectedSituation, onSituationClick,
    currencySign, currencyCode, packages, subscription,
    buttonText, onClick,
  } = props

  return (
    <Container>
      <PackageDescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <SituationContainer>
          {
            situations.map((value: string) => {
              return (
                <SituationButton
                  key={value}
                  type={
                    selectedSituation === value
                      ? 'primary'
                      : undefined
                  }
                  // tslint:disable-next-line: jsx-no-lambda
                  onClick={() => onSituationClick(value)}
                >
                  {value}
                </SituationButton>
              )
            })
          }
        </SituationContainer>
      </PackageDescriptionContainer>
      <PackageWrapper>
        {
          packages.map((edubaoPackage: object) => {
            return (
              <PackageCard
                key={get(edubaoPackage, 'id')}
                currencySign={currencySign}
                currencyCode={currencyCode}
                subscription={subscription}
                buttonText={buttonText}
                onClick={onClick}
                {...edubaoPackage}
              />
            )
          })
        }
      </PackageWrapper>
    </Container>
  )
}

export default Desktop
