import React from 'react'
import {
  Container,
  Title,
  SearchBox,
  StyledInput,
  StyledButton,
} from './style'

interface IProps {
  headline: string
  placeholder: string
  value: string
  onChange?: React.FormEventHandler<HTMLInputElement>
  buttonText: string
  onClick: (str: string) => void
}

const Desktop = (props: IProps) => {
  return (
    <Container>
      <Title>
        {props.headline}
      </Title>
      <SearchBox>
        <StyledInput 
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
        <StyledButton>
          {props.buttonText}
        </StyledButton>
      </SearchBox>
    </Container>
  )
}

export default Desktop
