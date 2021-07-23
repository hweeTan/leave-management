import styled from 'styled-components'

const Item = styled.div`
  grid-column: ${({ span }) => `span ${span}`};
`

export default Item
