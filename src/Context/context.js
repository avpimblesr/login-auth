// Context/context.js

import React, { createContext, useContext, useReducer } from 'react'

const AuthStateContext = createContext(),
  AuthDispatchContext = createContext()

export function useAuthState() {
  const context = useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within an AuthProvider.')
  }
  return context
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within an AuthProvider.')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}
