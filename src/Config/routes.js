import React from 'react'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import NotFound from '../Pages/NotFound'

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/*',
    component: NotFound,
  },
]

export default routes
