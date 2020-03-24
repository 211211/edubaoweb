import React from 'react'
import {
  Container,
  SmallTitle,
  HeadLine,
  Description,
} from './style'

interface IProps {
  smallTitle?: string
  headline: string
  description?: string
  headlineColor?: string
  descriptionColor?: string
}

const Desktop = (props: IProps) => {
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
      {
        props.description && (
          <Description
            color={props.descriptionColor}
          >
            {props.description}
          </Description>
        )
      }
    </Container>
  )
}

export default Desktop
