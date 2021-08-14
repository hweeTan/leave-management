import React from 'react'
import styled from 'styled-components'

import Table from 'modules/common/components/Table'
import { colors, typography } from 'modules/common/utils/styles'

import useGetLeaves from './data/useGetLeaves'
import Loader from './Loader'
import LeaveItem from './LeaveItem'

const LeavesTable = () => {
  const { loading, data } = useGetLeaves()

  console.log(data)

  if (loading || !data) {
    return <Loader />
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Team</Table.HeadCell>
          <Table.HeadCell>Request Type</Table.HeadCell>
          <Table.HeadCell>Reason</Table.HeadCell>
          <Table.HeadCell>Request Date</Table.HeadCell>
          <Table.HeadCell>Submit Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map(leave => <LeaveItem key={leave.id} leave={leave} />)}
      </Table.Body>
    </Table>
  )
}

export default LeavesTable
