import React from 'react'
import styled from 'styled-components'

import { ChevronRight } from '../Icons'
import { colors, typography } from '../../utils/styles'

const StyledBreadcrumb = styled.ul`
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  display: inline-block;
  ${typography.size.small}
  color: ${colors.gray3};

  :last-child {
    color: ${colors.gray1};
  }
`

const Breadcrumb = ({ children }) => {
  return (
    <StyledBreadcrumb>
      {React.Children.map(children, (child, index) => (
        <>
          {child}
          {index < children.length - 1 && (
            <ChevronRight
              color={colors.gray3}
              style={{ verticalAlign: 'middle', margin: '0 0.5rem' }}
            />
          )}
        </>
      ))}
    </StyledBreadcrumb>
  )
}

Breadcrumb.Item = Item

export default Breadcrumb
