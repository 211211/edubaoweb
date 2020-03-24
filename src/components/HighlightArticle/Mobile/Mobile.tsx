import React from 'react'

import {
  Wrapper,
  Title,
  Description,
  Content,
  Highlight,
  Image,
  LabelWrapper,
  IconStyled,
  Header,
  SubTitle,
  Label,
  SubLabel,
  SubDescription,
  SubArticles,
  HighlightArticle,
  Article,
} from './style'

const Mobile = ({
  title = '',
  description = '',
  highlight = {},
  subArticles = {},
}: IHighlighArticle) => {
  const {
    image,
    label,
    link: highlightLink,
    title: highlightTitle,
    description: highlightDescription,
  }: any = highlight
  const {title: header, articles = []}: any = subArticles
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Content>
        <Highlight href={highlightLink} rel='noopener noreferrer'>
          <Image image={image} />
          <HighlightArticle>
            <LabelWrapper>
              <SubLabel>
                <IconStyled type='check' />
                <Label>{label}</Label>
              </SubLabel>
              <IconStyled type='right' />
            </LabelWrapper>
            <SubTitle>{highlightTitle}</SubTitle>
            <SubDescription>{highlightDescription}</SubDescription>
          </HighlightArticle>
        </Highlight>
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
