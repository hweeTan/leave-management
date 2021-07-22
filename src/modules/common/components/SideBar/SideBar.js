import React from 'react'
import styled from 'styled-components'

import { colors } from '../../utils/styles'

import Item from './Item'

const StyledSidebar = styled.nav`
  width: 13.75rem;
  background-color: ${colors.tealDark};
`

const SideBar = (props) => <StyledSidebar {...props} />

SideBar.Item = Item

export default SideBar
