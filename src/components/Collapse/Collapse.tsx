import React from 'react'
import { StyledCollapse, StyledPanel } from './style'
import { ICollapse, IPanel } from './Collapse.props'

interface IProps extends ICollapse {
  arrowRight?: string
  panels: IPanel[]
}

const Component = (props: IProps) => {
  const { onChange, panels, activeKey, ...rest } = props
  const expandIcon = (panelProps: any) => {
    const {arrowRight} = rest
    return <img src={arrowRight} alt='edubao collapsed icon' />
  }

  return (
    <StyledCollapse
      onChange={onChange}
      expandIcon={expandIcon}
      activeKey={activeKey}
      {...rest}
    >
      {
        panels.map((panelObject: IPanel, index: number) => {
          return <StyledPanel key={index} {...panelObject} />
        })
      }
    </StyledCollapse>
  )
}

export default Component
