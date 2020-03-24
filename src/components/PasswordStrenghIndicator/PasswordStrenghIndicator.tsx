import React, { useState, useEffect, Fragment } from 'react'
import zxcvbn from 'zxcvbn'
import {
  Container,
  StyledInput,
  PasswordIndicatorContainer,
  PasswordIndicatorBarContainer,
  PasswordIndicatorBar,
  PasswordIndicatorText,
} from './style'

const MIN_STRENGTH = 3 // from 0 to 4
const THRESHOLD_LENGTH = 7 // min: 8 chars
const PASSWORD_STRENGTH_COLOURS = {
  0: '#B5173B',
  1: '#FF9085',
  2: '#FF9D6F',
  3: '#FFFA9F',
  4: '#37D8AB',
}

interface IProps {
  password: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  minStrength?: number
  thresholdLength?: number
}

const Component = (props: IProps) => {
  const {
    minStrength = MIN_STRENGTH,
    thresholdLength = THRESHOLD_LENGTH,
    password = '',
    onChange,
    ...rest
  } = props

  const [strength, setStrength] = useState<number>(0)
  const [passwordStrengthInfo, setPasswordStrengthInfo] = useState<string>('')

  useEffect(() => {
    setStrength(zxcvbn(password).score) // or .feedback for feedback

    if (password.length === 0) {
      setPasswordStrengthInfo('')
      return
    }

    if (password.length < thresholdLength) {
      setPasswordStrengthInfo(`Just a 
        little more! Your password needs 8 characters.`)
      return
    }

    if (zxcvbn(password).score <= minStrength) {
      setPasswordStrengthInfo(`Weak! 
        Your password needs to be stronger`)
      return
    }

    setPasswordStrengthInfo('Great! Your password as at least 8 characters.')
  }, [password, minStrength, thresholdLength])

  const renderPasswordStrenghIndicatorComponent = () => {
    const indicators = []
    if (strength === 0) {
      return null
    }

    for (let i = 0; i < strength; i++) {
      indicators.push(
        <PasswordIndicatorBar
          color={PASSWORD_STRENGTH_COLOURS[i + 1]}
        />
      )
    }

    return indicators
  }

  return (
    <Container>
      <StyledInput
        type='password'
        value={password}
        onChange={onChange}
        {...rest}
      />
      <PasswordIndicatorContainer>
        {
          strength > 0 && (
            <Fragment>
              <PasswordIndicatorBarContainer>
                {renderPasswordStrenghIndicatorComponent()}
              </PasswordIndicatorBarContainer>
              <PasswordIndicatorText
                color={PASSWORD_STRENGTH_COLOURS[strength] || undefined}
              >
                {passwordStrengthInfo}
              </PasswordIndicatorText>
            </Fragment>
          )
        }
      </PasswordIndicatorContainer>
    </Container>
  )
}

export default Component
