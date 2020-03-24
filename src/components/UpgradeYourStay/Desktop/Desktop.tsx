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
  StyledUpgradeCard
} from './style'

interface IProps {
  title: string
  description: string
  currency: string
  situations: string[]
  logo?: string
  checkmark?: string
  packages: object[]

  buttonText?: string
  onClick: (data?: any) => void
}

const Desktop = (props: IProps) => {
  const [selectedSituation, setSelectedSituation] =
    useState<string>(props.situations[0] || '')

  const onSituationClicked = (selectedValue: string) => {
    if (selectedValue !== selectedSituation) {
      setSelectedSituation(selectedValue)
    }
  }

  return (
    <Container>
      <PackageDescriptionContainer>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <SituationContainer>
          {
            props.situations.map((value: string) => {
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
          props.packages.map((upgradePackage: object) => {
            return (
              <StyledUpgradeCard
                checkmark={props.checkmark}
                logo={props.logo}
                key={get(upgradePackage, 'id')}
                item={upgradePackage}
                currency={props.currency}
                buttonText={`${props.buttonText} ${get(upgradePackage, 'title')}`}
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => props.onClick(upgradePackage)}
              />
            )
          })
        }
      </PackageWrapper>
    </Container>
  )
}

export default Desktop
