// @ts-nocheck
import React, { useState, } from 'react'
import { ModalProvider } from 'styled-react-modal'
import Base from '../Base'
import { Modal, Overlay, Button } from 'components'
import { INFO } from './const'

const FancyModalButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1)
    }, 10)
  }

  const beforeClose = () => {
    return new Promise(resolve => {
      setOpacity(0)
      setTimeout(resolve, 200)
    })
  }

  const onSubmit = () => {
    console.log('subbmited!')
  }

  return (
    <div>
      <Button type='primary' onClick={toggleModal}>Open modal</Button>
      <Modal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <Overlay
          {...INFO}
          onSubmit={onSubmit}
          onCancel={toggleModal}
        />
      </Modal>
    </div>
  )
}

const options = {
  name: 'Modal',
  description: 'Modal',
  usage:
    'Modal',
  examples: [
    {
      label: 'Default Modal',
      value: (
        <ModalProvider>
          <FancyModalButton />
        </ModalProvider>
      ),
    },
  ],
}

export default () => <Base {...options} />
