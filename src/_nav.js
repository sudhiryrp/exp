import React from 'react'
import CIcon from '@coreui/icons-react'
import TagIcon from '@mui/icons-material/Tag'
import { cilDrop, cilSpeedometer, cilMoney } from '@coreui/icons'
import { CNavItem, CNavGroup, CNavTitle } from '@coreui/react'
import PaidIcon from '@mui/icons-material/Paid'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Transaction',
    to: '/transaction',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tour Package ',
    to: '/tourpackage',
    icon: <CIcon icon={PaidIcon} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Book Cab',
    to: '/bookcab',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Settings',

    items: [
      {
        component: CNavItem,
        name: 'Social Links',
        to: '/setting/sociallinks',
        icon: <TagIcon customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Profile',
        to: '/setting/profile',
        icon: <TagIcon customClassName="nav-icon" />,
      },
    ],
  },
]

export default _nav
