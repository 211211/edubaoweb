import React from 'react'
import { get } from 'lodash'
import {HeaderBox} from 'components'
import {
  Container,
  StoreBackground,
  HeaderContainer,
  ImageContainer,
  MarginContainer,
  GetAppForFree,
  AppStoreContainer,
  AppFeed,
  Wrapper,
} from './style'

interface IProps {
  icons: any
  title: string
  headline?: string
  description: string
  links: any
}

const Desktop = (props: IProps) => {
  const { icons, links, title, description, headline } = props
  return (
    <Container
      style={{
        backgroundImage: `url(${get(props.icons, 'foreground')}), url(${get(props.icons, 'background')})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Wrapper>
        <MarginContainer style={{ flex: '0 50%' }}>
          <HeaderContainer>
            <HeaderBox
              headline={title}
              description={description}
            />
          </HeaderContainer>          
          <AppStoreContainer>
            <GetAppForFree>{headline}</GetAppForFree>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <StoreBackground>
                <ImageContainer>
                  <a href={get(links, 'apple', '')} target='_blank' rel='noopener noreferrer'>
                    <img alt='Apple' src={get(icons, 'apple')} />
                  </a>
                </ImageContainer>
              </StoreBackground>
              <StoreBackground>
                <ImageContainer>
                  <a href={get(links, 'apple', '')} target='_blank' rel='noopener noreferrer'>
                    <img alt='Google' src={get(icons, 'google')} />
                  </a>
                </ImageContainer>
              </StoreBackground>
            </div>
          </AppStoreContainer>
        </MarginContainer>
        <AppFeed
          style={{
            marginTop: 143,
            flex: '0 1 38%',
            marginLeft: 'auto',
            background: `transparent url(${get(
              icons,
              'feed',
            )}) 0% 0% no-repeat padding-box`,
          }}
        />
      </Wrapper>
    </Container>
  )
}

export default Desktop
