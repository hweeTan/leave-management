import React from 'react'

import GlobalStyle from '../GlobalStyle'
import Status from './Status'

export default {
  title: 'Example/Status',
  component: Status,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Status {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  value: 'accepted',
}
