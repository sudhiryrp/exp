import React from 'react'

const SocialLink = React.lazy(() => import('./components/sociallink'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Transaction = React.lazy(() => import('./components/transaction'))
const Profile = React.lazy(() => import('./components/Profile'))
const TourPackage = React.lazy(() => import('./components/TourPackage'))
const AddTourPackage = React.lazy(() => import('./components/AddTourPackage'))
const EditTourPackage = React.lazy(() => import('./components/EditTour'))
const Bookcab = React.lazy(() => import('./components/Bookcab'))
// Base

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/setting/sociallinks', name: 'setting/sociallinks', element: SocialLink },
  { path: '/transaction', name: 'transaction', element: Transaction },
  { path: '/tourpackage', name: 'tourpackage', element: TourPackage, exact: true },
  { path: '/tourpackage/addtourpackage', name: 'addtourpackage', element: AddTourPackage },
  { path: '/tourpackage/edittour', name: 'edittourpackage', element: EditTourPackage },
  { path: '/bookcab', name: 'Bookcab', element: Bookcab },
  { path: '/setting/profile', name: 'setting/Profile', element: Profile },
]

export default routes
