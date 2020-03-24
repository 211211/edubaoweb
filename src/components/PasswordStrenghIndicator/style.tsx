import React from 'react'
import styled from 'styled-components'
import {Input} from 'components'
import {color as themeColor} from 'themes'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`

export const StyledInput = styled((props: any) => <Input {...props} />)`
    && {
        height: 48px;
        border-radius: 16px;
        padding: 12px 16px;
        color: ${themeColor.fontBlue};
        background: ${themeColor.white};

        font-size: 18px;
        line-height: 24px;
    }
`

export const PasswordIndicatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
`

export const PasswordIndicatorBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 4px;

    text-align: center;    
`

export const PasswordIndicatorBar = styled.span`
    display: flex;
    flex-direction: ro
    border-radius: 8px;
    width: 90px;
    height: 8px;
    background: ${({ color }) => color || themeColor.error};

    margin-right: 3px;
    &:last-child {
        margin-right: 0;
    }
`

export const PasswordIndicatorText = styled.span`
    font-size: 14px;
    line-height: 19px;
    color: ${({ color }) => color || themeColor.mainBlue};
`
