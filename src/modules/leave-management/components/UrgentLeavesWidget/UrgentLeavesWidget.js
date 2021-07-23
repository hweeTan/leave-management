import React from 'react'
import styled from 'styled-components'

import Box from 'modules/common/components/Box'
import Slider from 'modules/common/components/Slider'
import { colors, typography } from 'modules/common/utils/styles'

import useGetUrgentLeaveRequest from './data/use-get-urgent-leave-requests'
import LeaveRequest from './LeaveRequest'

const WidgetHeader = styled.span`
  display: block;
  ${typography.size.large}
  ${typography.weight.semibold}
  color: ${colors.gray1};
  margin-bottom: 1.5rem;
`

const renderItem = (leaveRequest) => <LeaveRequest {...leaveRequest} />

const getKey = ({ id }) => id

const UrgentLeavesWidget = () => {
  const { loading, data } = useGetUrgentLeaveRequest()

  if (loading) {
    return 'Loading...'
  }

  return (
    <Box>
      <WidgetHeader>Urgent leave requests ({data.length})</WidgetHeader>
      <Slider data={data} renderItem={renderItem} getKey={getKey} />
    </Box>
  )
}

export default UrgentLeavesWidget
