import React from 'react'

import GlobalStyle from '../GlobalStyle'
import Tag from './Tag'

export default {
  title: 'Example/Tag',
  component: Tag,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Tag {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  variant: 'blue',
  label: 'Team Tag',
}
