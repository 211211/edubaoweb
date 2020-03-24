import React from 'react'

import {
  Wrapper,
  Titles,
  Title,
  Content,
  LabelWrapper,
  IconStyled,
  SubTitle,
  Label,
  SubLabel,
  Articles,
  Article,
} from './style'

const Desktop = ({titles = [], articles = []}: IMoreArticles) => {
  return (
    <Wrapper>
      <Content>
        <Titles>
          {titles.map((title) => (
            <Title key={title}>{title}</Title>
          ))}
        </Titles>

        <Articles>
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
        </Articles>
      </Content>
    </Wrapper>
  )
}

export default Desktop
