import React from 'react'

import GlobalStyle from '../GlobalStyle'
import Box from './Box'

export default {
  title: 'Example/Box',
  component: Box,
}

const Template = () => (
  <>
    <GlobalStyle />
    <Box>
      <h3>Box content</h3>
      <p>My mom got sick all of a sudden. I will have to take probably one day off to take care of her. Will try to come back to the office ...</p>
    </Box>
  </>
)

export const Default = Template.bind({})
