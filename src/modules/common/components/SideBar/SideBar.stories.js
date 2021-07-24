import React from 'react'

import GlobalStyle from '../GlobalStyle'

import {
  Home,
  HomeFilled,
  Books,
  BooksFilled,
  Clipboard,
  ClipboardFilled,
  Cog,
  CogFilled,
} from '../Icons'
import Page from '../Page'
import SideBar from './SideBar'

export default {
  title: 'Example/SideBar',
  component: SideBar,
}

const routes = [
  {
    path: '#',
    icon: Home,
    activeIcon: HomeFilled,
    label: 'Home',
  },
  {
    path: '#',
    icon: Clipboard,
    activeIcon: ClipboardFilled,
    label: 'Leave Management',
  },
  {
    path: '#',
    icon: Books,
    activeIcon: BooksFilled,
    label: 'Documents',
  },
  {
    path: '#',
    icon: Cog,
    activeIcon: CogFilled,
    label: 'Settings',
  },
]

const Template = () => (
  <>
    <GlobalStyle />
    <Page>
      <SideBar>
        {routes.map(({ path, icon, activeIcon, label }, index) => (
          <SideBar.Item
            label={label}
            href={path}
            Icon={icon}
            ActiveIcon={activeIcon}
            active={index === 1}
          />
        ))}
      </SideBar>
    </Page>
  </>
)

export const Default = Template.bind({})
