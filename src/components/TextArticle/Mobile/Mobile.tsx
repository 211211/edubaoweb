import React from 'react'

import {
  Wrapper,
  Title,
  Description,
  Content,
  Text,
  LabelWrapper,
  IconStyled,
  Header,
  SubTitle,
  Label,
  SubLabel,
  SubArticles,
  Article,
} from './style'

const Mobile = ({
  title = '',
  description = '',
  subArticles = {},
}: ITextArticle) => {
  const {title: header, articles = []}: any = subArticles
  return (
    <Wrapper>
      <Content>
        <Text>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
        <SubArticles>
          <Header>{header}</Header>
          {articles.map((article: any) => (
            <Article
              key={article.link}
              href={article.link}
              rel='noopener noreferrer'
            >
              <LabelWrapper>
                <SubLabel>
                  <IconStyled type='check' />
                  <Label>{article.label}</Label>
                </SubLabel>
                <IconStyled type='right' />
              </LabelWrapper>
              <SubTitle>{article.title}</SubTitle>
            </Article>
          ))}
        </SubArticles>
      </Content>
    </Wrapper>
  )
}

export default Mobile
