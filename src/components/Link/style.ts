import styled from 'styled-components'

interface ILink {
  readonly color?: string
}

const setStyle = (props: any): string => {
  const {color} = props
  let colorStyle = ''

  if (color) {
    colorStyle = `color: ${color};`
  }

  return `${colorStyle}`
}

export const Wrapper = styled.a<ILink>`
  ${setStyle}
  &&:hover {
    text-decoration: underline;
  }
`
