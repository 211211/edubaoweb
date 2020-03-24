import React from 'react'

import {
  Wrapper,
  Title,
  Partners,
  Partner,
  LogoWrapper,
  Logo,
  Label,
} from './style'

const Desktop = ({title = '', partners = []}: IPartners) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Partners>
        {partners.map(({logo, label, link}: IPartner) => (
          <Partner key={`${logo}${label}${link}`}>
            <LogoWrapper target='_blank' href={link} rel='noopener noreferrer'>
              <Logo logo={logo} />
            </LogoWrapper>
            <Label>{label}</Label>
          </Partner>
        ))}
      </Partners>
    </Wrapper>
  )
}

export default Desktop
