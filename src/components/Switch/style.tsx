import React from 'react'
import { Radio } from 'antd'
import styled from 'styled-components'
import { color } from 'themes'
export const Container = styled((props: any) => <Radio.Group {...props} />)`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 48px;

    cursor: pointer;
    background: #85A7BC;
    border-radius: 16px;
  }
`

export const RadioButton = styled((props: any) => <Radio.Button {...props} />)`
  && {
    box-sizing: border-box;
    flex-grow: 1;
    justify-content: center;
    width: ${({width}) => width || 'inherit'}
    border: none;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;

    height: 48px;
    display: flex;

    padding-top: 12px;
    padding-bottom: 12px;

    border-radius: 16px;
    
    &:hover {
      background: ${color.white};
      color: #0D507A;
      box-shadow: none;
      opacity: 1;
    }

    color: #1E3056;
    background: transparent;
    box-shadow: none;
    opacity: 0.5;

    &::before {
      background: transparent !important;
      opacity: 1;
    }

    ${(props) => (props.checked || props.defaultChecked) && `
      background: ${color.white};
      color: #0D507A;
      box-shadow: none;
      opacity: 1;
    `}
  }
`
