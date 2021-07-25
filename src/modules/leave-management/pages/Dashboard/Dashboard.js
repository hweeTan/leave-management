import React from 'react'

import Page from 'modules/common/components/Page'
import Grid from 'modules/common/components/Grid'

import UrgentLeavesWidget from '../../components/UrgentLeavesWidget'

const Dashboard = () => (
  <Page.Content>
    <Grid>
      <Grid.Item span={6}>
        <UrgentLeavesWidget />
      </Grid.Item>
    </Grid>
  </Page.Content>
)

export default Dashboard
