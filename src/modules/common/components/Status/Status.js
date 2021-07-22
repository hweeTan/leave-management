import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, typography } from '../../utils/styles'

const StyledStatus = styled.span`
  display: inline-block;

  ${typography.size.xsmall}

  ${({ color }) => `
    color: ${color};

    ::before {
      content: '';
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${color};
      margin-right: 0.375rem;
    }
  `}
`

const STATUS_MAPPING = {
  accepted: {
    text: 'Accepted',
    color: colors.green,
  },
  pending: {
    text: 'Pending',
    color: colors.yellow,
  },
  rejected: {
    text: 'Rejected',
    color: colors.red,
  },
}

const Status = ({ value, ...props }) => {
  const { text, color } = STATUS_MAPPING[value]

  return (
    <StyledStatus color={color} {...props}>
      {text}
    </StyledStatus>
  )
}

Status.propTypes = {
  value: PropTypes.oneOf(['accepted', 'pending', 'rejected']).isRequired,
}

export default Status
