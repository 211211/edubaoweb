import React from 'react'
import { get } from 'lodash'
import {
  Container,
  ImageContainer,
  Content,
  SubHeadLine,
  SubHeadLineIcon,
  SubHeadLineText,
  HeadLine,
  Description,
} from './style'

interface ICardProps {
  backgroundImageUrl?: string
  subHeadLine?: string
  subHeadLineIcon?: string
  headline?: string
  description?: string
}

const Mobile = (props: ICardProps) => {
  return (
    <Container>
      <ImageContainer
        style={{
          backgroundImage: `url(${get(props, 'backgroundImageUrl')})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }} 
      />
      <Content>
        <SubHeadLine>
          <SubHeadLineIcon>
            <img
              alt={get(props, 'subHeadLine')}
              src={get(props, 'subHeadLineIcon')}
            />
          </SubHeadLineIcon>
          <SubHeadLineText>
            {get(props, 'subHeadLine')}
          </SubHeadLineText>
        </SubHeadLine>
        <HeadLine>
          {get(props, 'headline')}
        </HeadLine>
        <Description>
          {get(props, 'description')}
        </Description>
      </Content>
    </Container>
  )
}

export default Mobile
