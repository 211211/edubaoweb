import React from 'react'
import { Collapse } from 'antd'
import { ICollapse, IPanel } from './Collapse.props'
import styled from 'styled-components'
import {color as themeColor} from 'themes'
const { Panel } = Collapse

export const StyledCollapse =
  styled(({
    bordered = false,
    accordion = false,
    destroyInactivePanel = false,
    expandIconPosition = 'right',
    children,
    ...rest
  }: ICollapse) => {
    return (
      <Collapse
        bordered={bordered}
        accordion={accordion}
        destroyInactivePanel={destroyInactivePanel}
        expandIconPosition={expandIconPosition}
        {...rest}
      >
        {children}
      </Collapse>
    )
  })`

`

export const StyledPanel =
  styled(({
    disabled = false,
    forceRender = false,
    showArrow = true,
    content,
    ...rest
  }: IPanel) => {
    return (
      <Panel
        disabled={disabled}
        forceRender={forceRender}
        showArrow={showArrow}
        {...rest}
      >
        {content}
      </Panel>
    )
  })`
  color: ${({color}) => color || themeColor.mainBlue}
`
