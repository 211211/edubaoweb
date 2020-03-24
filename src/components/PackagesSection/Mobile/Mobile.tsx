import React, { useState } from 'react'
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
  subscription: string
  packages: object[]

  buttonText?: string
  onClick: (data?: any) => void
}

const Mobile = (props: IProps) => {
  const {
    title, description, situations,
    currencySign, currencyCode, packages, subscription,
    buttonText, onClick,
  } = props
  const [selectedSituation, setSelectedSituation] = useState<string>('')
  const onSituationClicked = (selectedValue: string) => {
    if (selectedValue !== selectedSituation) {
      setSelectedSituation(selectedValue)
    }
  }

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
                  onClick={() => onSituationClicked(value)}
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

export default Mobile
