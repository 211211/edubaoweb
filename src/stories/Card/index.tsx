// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import {Card} from 'components'
import Base from '../Base'
import {color} from 'themes'

const {white, mainBlue, fontBlue, background} = color
const Content = styled.div`
  max-width: 400px;
`
const Avatar = styled.div`
  width: 178px;
  height: 178px;
  background: ${({color}) => color || mainBlue};
  opacity: 0.5;
  border-radius: 100%;
  margin: 0 auto 30px auto;
`
const Header = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({color}) => color || mainBlue};
`
const Description = styled.p`
  font-size: 16px;
  color: ${({color}) => color || fontBlue};
`
const options = {
  name: 'Card',
  description: 'Simple rectangular container.',
  usage:
    'A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.',
  examples: [
    {
      label: 'Default',
      value: (
        <Card>
          <Content>
            <Avatar />
            <Header>
              Step by Step, guided process, info. Ornare Sollicitudin Commodo
              Mollis Vehicula
            </Header>
            <Description>
              Maximale Transparenz mit allen aktuellen Aufgaben,
              Verantwortlichkeiten und Status in einer Ansicht.
            </Description>
          </Content>
        </Card>
      ),
    },
    {
      label: 'With background color',
      value: (
        <Card background={mainBlue}>
          <Content>
            <Avatar color={background} />
            <Header color={white}>
              Step by Step, guided process, info. Ornare Sollicitudin Commodo
              Mollis Vehicula
            </Header>
            <Description color={white}>
              Maximale Transparenz mit allen aktuellen Aufgaben,
              Verantwortlichkeiten und Status in einer Ansicht.
            </Description>
          </Content>
        </Card>
      ),
    },
  ],
}
export default () => <Base {...options} />
