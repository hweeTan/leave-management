import React from 'react'

import Page from 'modules/common/components/Page'
import Grid from 'modules/common/components/Grid'
import UserBadge from 'modules/common/components/UserBadge'
import Status from 'modules/common/components/Status'
import Breadcrumb from 'modules/common/components/Breadcrumb'
import Form from 'modules/common/components/Form'
import Button from 'modules/common/components/Button'
import Flexbox from 'modules/common/components/Flexbox'

import useGetLeaveRequest from './data/useGetLeaveRequest'
import Loader from './Loader'
import ContentItem from './ContentItem'

const LeaveRequest = () => {
  const { loading, data } = useGetLeaveRequest()

  if (loading) {
    return <Loader />
  }

  const { user, requestType, status, requestDate, submitDate, reason } = data

  return (
    <Page.Content>
      <Grid>
        <Grid.Item span={6} start={4}>
          <Breadcrumb>
            <Breadcrumb.Item>Annual leave management</Breadcrumb.Item>
            <Breadcrumb.Item>Request detail</Breadcrumb.Item>
          </Breadcrumb>

          <Grid style={{ rowGap: '1rem', marginTop: '2.5rem' }}>
            <Grid.Item span={12}>
              <UserBadge user={user} />
            </Grid.Item>
            <Grid.Item span={6}>
              <ContentItem label='Request Type'>{requestType}</ContentItem>
            </Grid.Item>
            <Grid.Item span={6}>
              <ContentItem label='Status'>
                <Status value={status} />
              </ContentItem>
            </Grid.Item>
            <Grid.Item span={6}>
              <ContentItem label='Request Date'>{requestDate}</ContentItem>
            </Grid.Item>
            <Grid.Item span={6}>
              <ContentItem label='Submit Date'>{submitDate}</ContentItem>
            </Grid.Item>
            <Grid.Item span={12}>
              <ContentItem label='Reason'>{reason}</ContentItem>
            </Grid.Item>
          </Grid>

          <Form
            style={{ marginTop: '1.5rem' }}
            onSubmit={(values) => alert('submitted ' + JSON.stringify(values))}
          >
            <Form.RadioGroup name='status' required>
              <Form.Radio value='accepted' label='Accept' />
              <Form.Radio value='rejected' label='Reject' />
            </Form.RadioGroup>

            <Form.Input
              name='reason'
              label='Reason that I accept/reject'
              required
              rows={5}
            />

            <Flexbox justifyContent='center'>
              <Button
                label='Cancel'
                variant='secondary'
                style={{ marginRight: '1.5rem' }}
              />
              <Form.SubmitButton label='Submit' />
            </Flexbox>
          </Form>
        </Grid.Item>
      </Grid>
    </Page.Content>
  )
}

export default LeaveRequest
