import React from 'react'
import {
  Container,
  SmallTitle,
  HeadLine,
} from './style'

interface IProps {
  smallTitle?: string
  headline: string
  headlineColor?: string
}

const Component = (props: IProps) => {
  return (
    <Container>
      {
        props.smallTitle && (
          <SmallTitle>{props.smallTitle}</SmallTitle>
        )
      }
      <HeadLine
        color={props.headlineColor}
      >
        {props.headline}
      </HeadLine>
    </Container>
  )
}

export default Component
