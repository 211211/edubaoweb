import React from 'react'
import styled from 'styled-components'
import Modal from 'styled-react-modal'
import {color} from 'themes'

export const StyledModal = styled((props: any) => <Modal {...props} />)`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.background || color.background};
`
