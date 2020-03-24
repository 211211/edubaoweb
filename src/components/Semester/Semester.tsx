import React from 'react'
import {
  Container,
  Wrapper,
  IncreaseContainer,
  DecreasedContainer,
  NumberContainer,
  IconContainer,
} from './style'

const Component = ({
  value = 0,
  onIncreased,
  onDecreased,
  minusIcon,
  plusIcon,
  ...rest
}: any) => (
    <Container {...rest}>
      <Wrapper>
        <IncreaseContainer
          onClick={onIncreased}
        >
          <IconContainer>
            <img src={plusIcon} alt='plus' />
          </IconContainer>
        </IncreaseContainer>
        <NumberContainer>
          <span>{value}</span>
        </NumberContainer>
        <DecreasedContainer onClick={onDecreased}>
          <IconContainer>
            <img src={minusIcon} alt='minus' />
          </IconContainer>
        </DecreasedContainer>
      </Wrapper>
    </Container>
  )

export default Component
