import React from 'react'
import authProvider from './Contexts/Auth/authProvider'
function AppProvider({children}) {
  return (
    <authProvider>
      {children}
    </authProvider>
  )
}

export default AppProvider
