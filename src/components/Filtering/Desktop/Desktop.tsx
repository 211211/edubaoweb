import React from 'react'
import {
  Container,
  Title,
  FilterBox,
  StyledButton,
} from './style'

interface IFilter {
  value: string
  text: string
}

interface IProps {
  headline: string
  value: string
  filters: IFilter[]
  onClick: (str: string) => void
}

const Desktop = (props: IProps) => {
  return (
    <Container>
      <Title>
        {props.headline}
      </Title>
      <FilterBox>
        {
          props.filters.map(({ value, text }: IFilter) => {
            return (
              <StyledButton
                key={value}
                type={value === props.value && 'primary'}
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => props.onClick(value)}
              >
                {text || value}
              </StyledButton>
            )
          })
        }
      </FilterBox>
    </Container>
  )
}

export default Desktop
