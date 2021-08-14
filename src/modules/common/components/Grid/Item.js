import styled from 'styled-components'

const Item = styled.div`
  // grid-column: ${({ span }) => `span ${span}`};
  grid-column-start: ${({ start }) => start};
  grid-column-end: ${({ span }) => `span ${span}`};
  grid-auto-rows: minmax(min-content, max-content);
`

export default Item
