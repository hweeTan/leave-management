import React from 'react'

import GlobalStyle from '../GlobalStyle'
import Input from './Input'

export default {
  title: 'Example/Input',
  component: Input,
}

const Template = () => (
  <>
    <GlobalStyle />
    <Input name='test' onChange={() => alert('test')} />
  </>
)

export const Default = Template.bind({})
