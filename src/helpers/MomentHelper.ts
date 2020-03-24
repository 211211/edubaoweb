// @ts-nocheck
import moment from 'moment'

// get
export const getNow = () => moment()
export const getWeekDay = date => date.clone().locale('en_US').weekday()
export const getYear = date => date.year()
export const getMonth = date => date.month()
export const getDate = date => date.date()
export const getHour = date => date.hour()
export const getMinute = date => date.minute()
export const getSecond = date => date.second()

// set
export const addYear = (date, diff) => {
    const clone = date.clone()
    clone.add(diff, 'year')
    return clone
}

export const addMonth = (date, diff) => {
    const clone = date.clone()
    clone.add(diff, 'month')
    return clone
}

export const addDate = (date, diff) => {
    const clone = date.clone()
    clone.add(diff, 'day')
    return clone
}

export const setYear = (date, year) => {
    const clone = date.clone()
    clone.year(year)
    return clone
}

export const setMonth = (date, month) => {
    const clone = date.clone()
    clone.month(month)
    return clone
}

export const setDate = (date, num) => {
    const clone = date.clone()
    clone.date(num)
    return clone
}

export const setHour = (date, hour) => {
    const clone = date.clone()
    clone.hour(hour)
    return clone
}

export const setMinute = (date, minute) => {
    const clone = date.clone()
    clone.minute(minute)
    return clone
}

export const setSecond = (date, second) => {
    const clone = date.clone()
    clone.second(second)
    return clone
}


// Compare
export const isAfter = (date1, date2) => date1.isAfter(date2)
export const isValidate = date => date.isValid()
