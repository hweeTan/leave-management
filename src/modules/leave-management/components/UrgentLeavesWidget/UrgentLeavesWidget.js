import React from 'react'
import styled from 'styled-components'

import Box from 'modules/common/components/Box'
import Slider from 'modules/common/components/Slider'
import { colors, typography } from 'modules/common/utils/styles'

import useGetUrgentLeaveRequests from './data/useGetUrgentLeaveRequests'
import LeaveRequest from './LeaveRequest'
import Loader from './Loader'

const WidgetHeader = styled.span`
  display: block;
  ${typography.size.large}
  ${typography.weight.semibold}
  color: ${colors.gray1};
  margin-bottom: 1.5rem;
`

const UrgentLeavesWidget = () => {
  const { loading, data: urgentLeaveRequests } = useGetUrgentLeaveRequests()

  if (loading) {
    return <Loader />
  }

  return (
    <Box>
      <WidgetHeader>
        Urgent leave requests ({urgentLeaveRequests.length})
      </WidgetHeader>
      <Slider>
        {urgentLeaveRequests.map((leaveRequest) => (
          <LeaveRequest key={leaveRequest.id} {...leaveRequest} />
        ))}
      </Slider>
    </Box>
  )
}

export default UrgentLeavesWidget
