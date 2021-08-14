import styled from 'styled-components'

import Item from './Item'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.5rem;
`

Grid.Item = Item

export default Grid
