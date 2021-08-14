import LeaveManagementDashboard from 'modules/leave-management/pages/Dashboard'
import LeaveRequest from 'modules/leave-management/pages/LeaveRequest'
import SamplePage from 'modules/other/pages/SamplePage'

import {
  Home,
  HomeFilled,
  Books,
  BooksFilled,
  Clipboard,
  ClipboardFilled,
  Cog,
  CogFilled,
} from 'modules/common/components/Icons'

export const mainRoutes = [
  {
    path: '/',
    icon: Home,
    activeIcon: HomeFilled,
    label: 'Home',
    ContentComponent: SamplePage,
    exact: true,
  },
  {
    path: '/leave-management',
    icon: Clipboard,
    activeIcon: ClipboardFilled,
    label: 'Leave Management',
    ContentComponent: LeaveManagementDashboard,
    exact: true,
  },
  {
    path: '/documents',
    icon: Books,
    activeIcon: BooksFilled,
    label: 'Documents',
    ContentComponent: SamplePage,
  },
  {
    path: '/settings',
    icon: Cog,
    activeIcon: CogFilled,
    label: 'Settings',
    ContentComponent: SamplePage,
  },
]

export const otherRoutes = [
  {
    path: '/leave-management/:id',
    ContentComponent: LeaveRequest,
  },
]

const allRoutes = [...mainRoutes, ...otherRoutes]

export default allRoutes
