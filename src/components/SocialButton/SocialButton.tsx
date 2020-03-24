import React from 'react'

import {Wrapper, Icon, Label} from './style'

const SocialButton = ({icon, label, link}: ISocialButton) => {
  return (
    <Wrapper target='_blank' href={link} rel='noopener noreferrer'>
      <Icon icon={icon} />
      <Label>{label}</Label>
    </Wrapper>
  )
}

export default SocialButton
