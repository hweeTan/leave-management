import React from 'react'

import GlobalStyle from '../GlobalStyle'
import Box from '../Box'
import Slider from './Slider'

export default {
  title: 'Example/Slider',
  component: Slider,
}

const data = [...new Array(10)].map((_, index) => ({
  id: index,
  title: `Title - ${index + 1}`,
  content: `Content for ${index + 1} subject`,
}))

const renderItem = ({ title, content }) => (
  <Box style={{ margin: '2rem' }}>
    <h5>{title}</h5>
    <p>{content}</p>
  </Box>
)

const getKey = ({ id }) => id

const Template = () => (
  <>
    <GlobalStyle />
    <Slider data={data} renderItem={renderItem} getKey={getKey} />
  </>
)

export const Default = Template.bind({})
