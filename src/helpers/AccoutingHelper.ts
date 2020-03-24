import accounting from 'accounting'
import { DE } from 'languages'

export const ALLOWED_CURRENCY = ['$', '€', '£', '¥', '₽', '₫']

export const DELIMITER_DOT = '.'
export const DELIMITER_COMMA = ','

export interface IMoney {
    money: string | number
    symbol?: string
    precision?: number
    thousand?: string
    decimal?: string
    format?: string
}

export const formatMoney = (
    {
        money,
        symbol = '',
        precision = 2,
        thousand = delimiterForThousandWithLocale(),
        decimal = delimiterForDecimalWithLocale(),
        format = '%s%v'
    }: IMoney
) => accounting
    .formatMoney(money, symbol, precision, thousand, decimal, format)

export interface INumber {
    numb: number
    precision?: number
    thousand?: string
    decimal?: string
}

export const formatNumber = (
    {
        numb = 0,
        precision = 0,
        thousand = delimiterForThousandWithLocale(),
        decimal = delimiterForDecimalWithLocale(),
    }: INumber
) => accounting.formatNumber(numb, precision, thousand, decimal)


export function delimiterForThousandWithLocale() {
    if (getCurrentLanguage() === DE) { // TODO: Check language
        return DELIMITER_DOT
    }

    return DELIMITER_COMMA
}

export function delimiterForDecimalWithLocale() {
    if (getCurrentLanguage() === DE) { // TODO: Check language
        return DELIMITER_COMMA
    }

    return DELIMITER_DOT
}

export function getCurrentLanguage() {

    return window.localStorage.getItem('language')
}

export function toFixed(numb: number, precision = 2) {
    return accounting.toFixed(numb, precision)
}
