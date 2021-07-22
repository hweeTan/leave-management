import React from 'react'

import GlobalStyle from '../GlobalStyle'
import Header from './Header'

export default {
  title: 'Example/Header',
  component: Header,
}

const Template = () => <><GlobalStyle /><Header /></>

export const Default = Template.bind({})
