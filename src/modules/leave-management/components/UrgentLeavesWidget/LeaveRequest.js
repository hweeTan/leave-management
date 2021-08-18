import React from 'react'
import styled from 'styled-components'

import Flexbox from 'modules/common/components/Flexbox'
import Button from 'modules/common/components/Button'
import UserBadge from 'modules/common/components/UserBadge'
import { useNotification } from 'modules/common/components/Notification'
import { colors, typography } from 'modules/common/utils/styles'

const StyledReason = styled.p`
  ${typography.size.small}
  color: ${colors.gray1};
  margin: 1rem 0 0 0;
`

const LeaveRequest = ({ user, reason }) => {
  const { showSuccess } = useNotification()

  return (
    <>
      <Flexbox alignItems='center' justifyContent='space-between'>
        <UserBadge user={user} />

        <Button
          onClick={() => {
            showSuccess(`You have acknowledged the request!`)
          }}
          label='Acknowledge'
          size='medium'
        />
      </Flexbox>
      <StyledReason>{reason}</StyledReason>
    </>
  )
}

export default LeaveRequest
