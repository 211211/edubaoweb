import React from 'react'

import {
  Wrapper,
  Title,
  Description,
  Columns,
  Column,
  Image,
  SubTitle,
  SubDescription,
  ButtonWrapper,
  StyledButton,
} from './style'

const Desktop = ({
  title = '',
  description = '',
  firstColumn = {},
  secondColumn = {},
}: IHeadlineTwoColumns) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Columns>
        <Column>
          <Image image={firstColumn.image} />
          <SubTitle>{firstColumn.title}</SubTitle>
          {firstColumn.descriptions.map((d: string) => (
            <SubDescription key={d}>{d}</SubDescription>
          ))}
          <ButtonWrapper
            href={firstColumn.button.link}
            rel='noopener noreferrer'
          >
            <StyledButton>{firstColumn.button.label}</StyledButton>
          </ButtonWrapper>
        </Column>
        <Column>
          <Image image={secondColumn.image} />
          <SubTitle>{secondColumn.title}</SubTitle>
          {secondColumn.descriptions.map((d: string) => (
            <SubDescription key={d}>{d}</SubDescription>
          ))}
          <ButtonWrapper
            href={secondColumn.button.link}
            rel='noopener noreferrer'
          >
            <StyledButton>{secondColumn.button.label}</StyledButton>
          </ButtonWrapper>
        </Column>
      </Columns>
    </Wrapper>
  )
}

export default Desktop
