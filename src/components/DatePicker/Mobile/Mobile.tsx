import React, { useState } from 'react'
import moment, { Moment } from 'moment'
import { isAfter } from 'helpers'
import {
    StyledDatePicker,
    DatePickerCellInter,
    TodayCell,
    DaysNotInMonth,
    ImageContainer
} from './style'

const renderIcon = (icon?: string, alt?: string, isSuffix?: boolean) => {
    if (!icon) {
        return null
    }

    if (isSuffix) {
        return (
            <ImageContainer>
                <img style={{ height: 24, width: 25 }} src={icon} alt={alt} />
            </ImageContainer>
        )
    }

    return <img src={icon} alt={alt} />
}

const Mobile = (props: any) => {
    const [today] = useState<Moment>(moment())
    const { format: dateFormat } = props
    const startOfMonth = moment(today).startOf('month')
    const endOfMonth = moment(today).endOf('month')

    return (
        <StyledDatePicker
            {...props}
            prevIcon={renderIcon(props.prevIcon, 'prev month')}
            nextIcon={renderIcon(props.nextIcon, 'next month')}
            superPrevIcon={renderIcon(props.superPrevIcon, 'prev year')}
            superNextIcon={renderIcon(props.superNextIcon, 'next year')}
            suffixIcon={renderIcon(props.suffixIcon, 'calendar', true)}
            // tslint:disable-next-line: jsx-no-lambda
            dateRender={(current: Moment) => {
                const isToday: boolean = moment(current.format(dateFormat))
                    .isSame(today.format(dateFormat))
                const CellComponent = isToday ? TodayCell : DatePickerCellInter

                const isOutRange = isAfter(startOfMonth, current)
                    || isAfter(current, endOfMonth)

                return (
                    <CellComponent
                        className='ant-picker-cell-inner'
                    >
                        {
                            !isOutRange ? current.date() : (
                                <DaysNotInMonth>
                                    {current.date()}
                                </DaysNotInMonth>
                            )
                        }
                    </CellComponent>
                )
            }}
        />
    )
}

export default Mobile
