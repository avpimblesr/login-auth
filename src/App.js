import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import routes from './Config/routes'
import Login from './Pages/Login/index'

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     {routes.map((route) => (
    //       <Route
    //         key={route.path}
    //         path={route.path}
    //         component={route.component}
    //       />
    //     ))}
    //   </Switch>
    // </BrowserRouter>
    <>
      <Login />
    </>
  )
}

export default App
