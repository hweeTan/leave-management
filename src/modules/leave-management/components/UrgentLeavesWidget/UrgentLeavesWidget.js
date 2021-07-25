import React from 'react'
import styled from 'styled-components'

import Box from 'modules/common/components/Box'
import Slider from 'modules/common/components/Slider'
import { colors, typography } from 'modules/common/utils/styles'

import mocks from './data/mocks'
import LeaveRequest from './LeaveRequest'

const WidgetHeader = styled.span`
  display: block;
  ${typography.size.large}
  ${typography.weight.semibold}
  color: ${colors.gray1};
  margin-bottom: 1.5rem;
`

const UrgentLeavesWidget = () => {
  return (
    <Box>
      <WidgetHeader>Urgent leave requests ({mocks.length})</WidgetHeader>
      <Slider>
        {mocks.map((leaveRequest) => (
          <LeaveRequest key={leaveRequest.id} {...leaveRequest} />
        ))}
      </Slider>
    </Box>
  )
}

export default UrgentLeavesWidget
