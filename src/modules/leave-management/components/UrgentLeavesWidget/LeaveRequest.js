import React from 'react'
import styled from 'styled-components'

import Flexbox from 'modules/common/components/Flexbox'
import Tag from 'modules/common/components/Tag'
import Button from 'modules/common/components/Button'
import { colors, typography } from 'modules/common/utils/styles'

const Avatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin-right: 1rem;
`

const Name = styled.span`
  ${typography.size.small}
  ${typography.weight.semibold}
  color: ${colors.gray1};
`

const StyledReason = styled.p`
  ${typography.size.small}
  color: ${colors.gray1};
  margin: 1rem 0 0 0;
`

const LeaveRequest = ({ user: { avatar, fullName, team, teamColor }, reason }) => (
  <>
    <Flexbox alignItems='center' justifyContent='space-between'>
      <Flexbox>
        <Avatar src={avatar} alt={fullName} />
        <Flexbox direction='column' justifyContent='space-between'>
          <Name>{fullName}</Name>
          <Tag label={team} variant={teamColor} />
        </Flexbox>
      </Flexbox>

      <Button label='Acknowledge' size='medium' />
    </Flexbox>
    <StyledReason>{reason}</StyledReason>
  </>
)

export default LeaveRequest
