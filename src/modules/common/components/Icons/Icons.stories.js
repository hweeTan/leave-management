import React from 'react'

import GlobalStyle from '../GlobalStyle'
import Box from '../Box'
import Grid from '../Grid'
import { colors } from '../../utils/styles'
import * as Icons from '.'

export default {
  title: 'Example/Icons',
  component: Icons,
}

const Template = () => (
  <>
    <GlobalStyle />
    <Grid>
      {Object.entries(Icons).map(([iconName, Icon]) => (
        <Grid.Item 
          span={3} 
          as={Box} 
          key={iconName} 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Icon color={colors.gray1} style={{ marginBottom: '0.25rem' }} />
          {iconName}
        </Grid.Item>
      ))}
    </Grid>
  </>
)

export const Default = Template.bind({})
