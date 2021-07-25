import React from 'react'
import styled from 'styled-components'

import { colors } from '../../utils/styles'

import Item from './Item'
import RouterItem from './RouterItem'

const StyledSidebar = styled.nav`
  ${({ fixed }) =>
    fixed
      ? `
        position: fixed;
        top: 3.5rem;
        left: 0;
        right: 0;
        z-index: 2;
        `
      : `
        position: absolute;
        `}

  min-height: calc(100vh - 3.5rem);

  width: 13.75rem;
  background-color: ${colors.tealDark};
`

const SideBar = (props) => <StyledSidebar {...props} />

SideBar.Item = Item
SideBar.RouterItem = RouterItem

export default SideBar
