import React from 'react'

import {
  Wrapper,
  Title,
  Content,
  TextWrapper,
  LogosWrapper,
  LogoTitle,
  Logos,
  LogoWrapper,
  Logo,
  ArticlesWrapper,
  ArticleTitle,
  Article,
  LabelWrapper,
  SubLabel,
  IconStyled,
  SubTitle,
  Label,
} from './style'

const Desktop = (props: ILogosArticles) => {
  const {title = '', image = '', logos = {}, articles = {}} = props
  const {title: logoTitle, logoList}: any = logos
  const {title: articleTitle, articleList}: any = articles

  return (
    <Wrapper image={image}>
      <Content>
        <TextWrapper>
          <Title>{title}</Title>
          <LogosWrapper>
            <LogoTitle>{logoTitle}</LogoTitle>
            <Logos>
              {logoList.map((logo: string, index: number) => (
                <LogoWrapper key={index}>
                  <Logo key={index} src={logo} />
                </LogoWrapper>
              ))}
            </Logos>
          </LogosWrapper>
        </TextWrapper>
        <ArticlesWrapper>
          <ArticleTitle>{articleTitle}</ArticleTitle>
          {articleList.map((article: any) => (
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
        </ArticlesWrapper>
      </Content>
    </Wrapper>
  )
}

export default Desktop
