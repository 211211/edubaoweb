import React from 'react'
import { DatePicker } from 'antd'
import styled from 'styled-components'
import { color } from 'themes'

export const StyledDatePicker = styled((props: any) => {
  return (
    <DatePicker
      {...props}
      showToday={false}
    />
  )
})`
  height: 48px;

  div:first-child {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .ant-input {
      height: 48px;
      padding-left: 16px;
      padding-top: 12px;
      padding-bottom: 12px;

      font-size: 18px;
      line-height: 24px;

      border: none;
    }
  }
`

export const DaysNotInMonth = styled.div`
  color: rgba(0, 0, 0, 0.25);
`

export const DatePickerCellInter = styled.div`
  font-size: 14px;
  line-height: 19px;
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;

  background: ${color.background};
  color: ${color.mainBlue};

  display: flex;
  align-items: center;
  justify-content: center;

  &&:hover {
    background: ${color.mainBlue};
    color: ${color.background};
    cursor: pointer;
  
    border-radius: 50%;

    ${DaysNotInMonth} {
      color: ${color.background};
    }
  }
`

export const TodayCell = styled(DatePickerCellInter)`
  background: ${color.mainBlue};
  color: ${color.background};
  border-radius: 50%;
`

export const ImageContainer = styled.div`
  display: flex;
  min-width: 25px;
  min-height: 24px;

  &.ant-calendar-picker-icon {
    top: auto;
    margin-top: auto;
  }
`
