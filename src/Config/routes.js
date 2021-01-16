import React from 'react'
import Login from '../Pages/Login'
import DashBoard from '../Pages/Dashboard'
import NotFound from '../Pages/NotFound'

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/dashboard',
    component: DashBoard,
  },
  {
    path: '/*',
    component: NotFound,
  },
]

export default routes
