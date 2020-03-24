import React from 'react'
import { get } from 'lodash'
import {
  Container,
  HeadLine,
  Description,
  ActionContainer,
  NextButton,
  BackButton,
  Content,
  ContentContainer,
} from './style'

const rawMarkup = (text: string) => {
  return { __html: text }
}

const Desktop = (props: any) => {
  return (
    <Container>
      <Content>
        <HeadLine>{get(props, 'headline')}</HeadLine>
        <Description>
          <div
            dangerouslySetInnerHTML={
              rawMarkup(get(props, 'description'))
            }
          />
        </Description>
        <ContentContainer>
          {props.content}
        </ContentContainer>
      </Content>
      <ActionContainer>
        <BackButton onClick={props.onCancel}>
          {get(props, 'cancelButtonLabel')}
        </BackButton>
        <NextButton onClick={props.onOk} type={props.okButtonType}>
          {get(props, 'okButtonLabel')}
        </NextButton>
      </ActionContainer>
    </Container>
  )
}

export default Desktop
