import styled from 'styled-components'
import { Container as RadioContainer } from '../Radio/style'

export const RadioGroupContainer = styled.div<{ direction?: string }>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'}

    ${({ direction }) => direction === 'row' ? `
        ${RadioContainer} {
            margin-right: 5px;
            &:last-child {
                margin-right: 0;
            }
        }
    ` : `
        ${RadioContainer} {
            margin-bottom: 5px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    `}
`
