import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { typography, colors } from '../../utils/styles'

const StyledItem = styled.a`
  position: relative;
  display: flex;
  padding: 1rem 1.5rem;
  color: ${colors.white};
  text-decoration: none;

  ${typography.size.small}

  svg {
    margin-right: 1rem;
  }

  :hover {
    background-color: ${colors.black};
    cursor: pointer;
  }

  ${({ $active }) =>
    $active
      ? `
    background-color: ${colors.black};

    :after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: ${colors.primary};
    }
  `
      : `
  background-color: ${colors.tealDark};
  `}
`

const Item = ({ label, ActiveIcon, Icon, active, ...props }) => {
  return (
    <StyledItem $active={active} {...props}>
      {!!active ? (
        <ActiveIcon color={colors.primary} />
      ) : (
        <Icon color={colors.white} />
      )}
      {label}
    </StyledItem>
  )
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  ActiveIcon: PropTypes.func.isRequired,
  Icon: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default Item
