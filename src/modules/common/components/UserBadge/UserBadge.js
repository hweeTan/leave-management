import React from 'react'
import styled from 'styled-components'

import Flexbox from '../Flexbox'
import Tag from '../Tag'
import { colors, typography } from '../../utils/styles'

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

const UserBadge = ({ user: { avatar, fullName, team, teamColor } }) => (
  <Flexbox>
    <Avatar src={avatar} alt={fullName} />
    <Flexbox direction='column' justifyContent='space-between'>
      <Name>{fullName}</Name>
      <Tag label={team} variant={teamColor} />
    </Flexbox>
  </Flexbox>
)

export default UserBadge
