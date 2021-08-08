import React from 'react'

import GlobalStyle from '../GlobalStyle'
import { BarChart } from '.'

export default {
  title: 'Example/Chart',
  component: BarChart,
}

const data = [
  {
    name: 'Jun',
    spider: 4,
    tango: 4,
    ion: 0,
    hugo: 4,
    picasso: 4,
  },
  {
    name: 'Jul',
    spider: 5,
    tango: 5,
    ion: 0,
    hugo: 4,
    picasso: 0,
  },
  {
    name: 'Aug',
    spider: 2,
    tango: 0,
    ion: 2,
    hugo: 2,
    picasso: 2,
  },
  {
    name: 'Sep',
    spider: 5,
    tango: 5,
    ion: 0,
    hugo: 5,
    picasso: 5,
  },
  {
    name: 'Oct',
    spider: 3,
    tango: 0,
    ion: 3,
    hugo: 0,
    picasso: 0,
  },
  {
    name: 'Nov',
    spider: 2,
    tango: 0,
    ion: 0,
    hugo: 2,
    picasso: 0,
  },
]

const config = {
  keys: [
    {
      id: 'spider',
      label: 'Spider Team',
      color: 'orange',
    },
    {
      id: 'tango',
      label: 'Tango Team',
      color: 'blue',
    },
    {
      id: 'ion',
      label: 'Ion Team',
      color: 'teal',
    },
    {
      id: 'hugo',
      label: 'Hugo Team',
      color: 'yellow',
    },
    {
      id: 'picasso',
      label: 'Picasso Team',
      color: 'green',
    },
  ],
  unit: 'man-days',
}

const Template = () => (
  <>
    <GlobalStyle />
    <BarChart data={data} config={config} style={{ height: 178, width: 240 }} />
  </>
)

export const Default = Template.bind({})
