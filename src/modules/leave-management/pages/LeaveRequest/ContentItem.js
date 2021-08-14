import React from 'react'
import styled from 'styled-components'

import { typography, colors } from 'modules/common/utils/styles'

const StyledHeader = styled.p`
  margin: 0;
  ${typography.size.small}
  color: ${colors.gray3};
`

const StyledContent = styled.p`
  margin: 0;
  ${typography.size.small}
  color: ${colors.gray1};
`

const ContentItem = ({ label, children }) => {
  return (
    <>
      <StyledHeader>{label}</StyledHeader>
      <StyledContent>{children}</StyledContent>
    </>
  )
}

export default ContentItem
