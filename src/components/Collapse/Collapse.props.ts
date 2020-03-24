import React from 'react'

export interface ICollapse {
    activeKey?: string[] | string | number[] | number
    defaultActiveKey?: string[] | string | number[] | number
    bordered?: boolean
    accordion?: boolean
    onChange?: () => void
    expandIcon?: (panelProps: any) => React.ReactNode
    expandIconPosition?: 'left' | 'right'
    destroyInactivePanel?: boolean
    children: React.ReactNode
}

export interface IPanel {
    disabled?: boolean
    forceRender?: boolean
    header: string | React.ReactNode
    key: string | number
    showArrow?: boolean
    extra?: React.ReactNode
    color?: string
    content: React.ReactNode
}
