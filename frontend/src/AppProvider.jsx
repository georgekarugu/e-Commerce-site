import React from 'react'
import AuthProvider from './Contexts/Auth/authProvider'
import CartProvider from './Contexts/Cart/cartProvider'
import { SearchProvider } from './Contexts/Search/searchProvider'

function AppProvider({children}) {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          {children}
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default AppProvider
