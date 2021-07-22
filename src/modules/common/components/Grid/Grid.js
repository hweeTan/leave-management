import React from 'react'
import styled from 'styled-components'

import Item from './Item'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0.5rem, 1fr));
  gap: 1.5rem;
`

const Grid = (props) => <StyledGrid {...props} />

Grid.Item = Item

export default Grid
