import React from 'react'
import styled from 'styled-components'

import { colors } from '../../utils/styles'

import Item from './Item'
import RouterItem from './RouterItem'

const StyledSidebar = styled.nav`
  width: 13.75rem;
  background-color: ${colors.tealDark};
`

const SideBar = (props) => <StyledSidebar {...props} />

SideBar.Item = Item
SideBar.RouterItem = RouterItem

export default SideBar
