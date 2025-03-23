import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart, count, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
