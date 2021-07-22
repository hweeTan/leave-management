import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledItem = styled.div`
  grid-column: ${({ span }) => `span ${span}`};
`

const Item = (props) => (
  <StyledItem {...props} />
)

Item.propType = {
  span: PropTypes.number.isRequired,
}

export default Item
