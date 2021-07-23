import styled from 'styled-components'

const Flexbox = styled.div`
  display: flex;

  ${({ alignItems, justifyContent, direction }) => `
    ${alignItems ? `align-items: ${alignItems};` : ''}
    ${justifyContent ? `justify-content: ${justifyContent};` : ''}
    ${direction ? `flex-direction: ${direction};` : ''}
  `}
`

export default Flexbox
