import LeaveManagementDashboard from 'modules/leave-management/pages/Dashboard'
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

const routes = [
  {
    path: '/',
    icon: Home,
    activeIcon: HomeFilled,
    label: 'Home',
    ContentComponent: SamplePage,
  },
  {
    path: '/leave-management',
    icon: Clipboard,
    activeIcon: ClipboardFilled,
    label: 'Leave Management',
    ContentComponent: LeaveManagementDashboard,
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

export default routes
