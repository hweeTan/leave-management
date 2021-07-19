import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, typography } from '../../utils/styles'

const StyledTag = styled.span`
  display: inline-block;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;

  ${typography.size.xsmall}

  color: ${({ variant }) => colors[variant]};
  background-color: ${({ variant }) => colors[`${variant}Light`]};
`

const Tag = ({ label, ...props }) => {
  return <StyledTag {...props}>{label}</StyledTag>
}

Tag.propTypes = {
  variant: PropTypes.oneOf(['blue', 'green', 'yellow', 'orange', 'teal']),
  label: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  variant: 'blue',
}

export default Tag
