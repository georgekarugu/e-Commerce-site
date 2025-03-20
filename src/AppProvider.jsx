import React from 'react'
import AuthProvider from './Contexts/Auth/authProvider'
import CartProvider from './Contexts/Cart/cartProvider'
function AppProvider({children}) {
  return (
    
    <AuthProvider>
      <CartProvider>
       
          {children}
        
      </CartProvider>
    </AuthProvider>
  )
}

export default AppProvider
