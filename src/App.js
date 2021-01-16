import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import routes from './Config/routes'
import { AuthProvider } from './Context'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
