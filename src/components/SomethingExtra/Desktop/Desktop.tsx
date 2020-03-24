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
  StyledPackageContainer,
  PackageContainer,
} from './style'

const Desktop = (props: any) => {
  return (
    <Container>
      <Content>
        <HeadLine>{get(props, 'headline')}</HeadLine>
        <Description>{get(props, 'description')}</Description>
        <PackageContainer>
          <StyledPackageContainer {...get(props, 'upgradedPackage')} />
        </PackageContainer>
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
