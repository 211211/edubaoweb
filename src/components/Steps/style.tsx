import styled from "styled-components"

export const Container = styled.div`

`

export const Content = styled.div<{fontSize?: string, lineHeight?: string}>`
    font-size: ${({fontSize}) => fontSize || '18px'};
    line-height: ${({lineHeight}) => lineHeight || '24px'};
`