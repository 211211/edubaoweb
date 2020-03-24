import React from 'react'
import { get } from 'lodash'
import {
  Container,
  Title,
  Description,
  SituationContainer,
  SituationButton,
} from './style'

interface IProps {
  title: string
  description: string
  situations: string[]
  selectedSituation: string

  buttonText?: string
  onClick: (data?: any) => void
}

const Mobile = (props: IProps) => (
  <Container>
    <Title>{get(props, 'title')}</Title>
    {
      props.description && (
        <Description>{get(props, 'description')}</Description>
      )
    }
    <SituationContainer>
      {
        get(props, 'situations').map((value: string) => {
          return (
            <SituationButton
              key={value}
              type={
                props.selectedSituation === value
                  ? 'primary'
                  : undefined
              }
              // tslint:disable-next-line: jsx-no-lambda
              onClick={() => props.onClick(value)}
            >
              {value}
            </SituationButton>
          )
        })
      }
    </SituationContainer>
  </Container>
)

export default Mobile
