import React from 'react'
import { Steps } from 'antd'
import {get} from 'lodash'
import { Container, Content } from './style'

interface IStep {
  title?: string
  subTitle?: string
  description?: string
  status?: 'wait' | 'process' | 'finish' | 'error'
  icon?: string
  disabled?: boolean
  content?: React.ReactNode
  fontSize?: string
  lineHeight?: string
}

interface IProps {
  initial?: number
  activeIndex: number
  steps: IStep[]
  direction?: 'horizontal' | 'vertical' // horizontal | vertical
  size?: 'default' | 'small' // small
  // tslint:disable-next-line: ban-types
  progressDot?: boolean | Function
  onChange?: (current: number) => void
}

const Component = (props: IProps) => {
  const {
    activeIndex = 0,
    steps = [],
    direction = 'horizontal',
    size = 'default',
    onChange,
    ...rest
  } = props

  const { Step } = Steps

  return (
    <Container>
      <Steps
        current={activeIndex}
        onChange={onChange}
        direction={direction}
        size={size}
        {...rest}
      >
        {
          steps.map((step: IStep) => {
            return (
              <Step
                key={step?.title}
                {...step}
              />
            )
          })
        }
      </Steps>
      {
        steps[activeIndex]?.content && (
          <Content 
            fontSize={get(steps[activeIndex], 'fontSize')}
            lineHeight={get(steps[activeIndex], 'lineHeight')}
          >
            {steps[activeIndex]?.content}
          </Content>
        )
      }
    </Container>
  )
}

export default Component
