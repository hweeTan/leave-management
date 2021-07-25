import React from 'react'

import GlobalStyle from '../GlobalStyle'
import Slider from './Slider'

export default {
  title: 'Example/Slider',
  component: Slider,
}

const Template = () => (
  <>
    <GlobalStyle />
    <Slider>
      <div style={{ height: 100, backgroundColor: 'aliceblue' }}>Slide 1</div>
      <div style={{ height: 100, backgroundColor: 'aliceblue' }}>Slide 2</div>
      <div style={{ height: 100, backgroundColor: 'aliceblue' }}>Slide 3</div>
      <div style={{ height: 100, backgroundColor: 'aliceblue' }}>Slide 4</div>
    </Slider>
  </>
)

export const Default = Template.bind({})
