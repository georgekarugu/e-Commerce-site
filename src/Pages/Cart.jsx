import { Card, CardContent } from "../Components/card";
import { Button } from "../Components/button";
import { Trash } from "lucide-react";
import { useState, useContext} from "react";
import { CartContext } from "../Contexts/Cart/cartProvider";




const Cart = () => {
  const { cart, setCart, count,setCartCount  } = useContext(CartContext); // Get cart state from context

  
   // Calculate subtotal
   const subtotal = cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

   const updateCartCount = (cart) => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);
  };

  const onRemove = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    updateCartCount(updatedCart); // Update count
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    updateCartCount(updatedCart); // Update count
  };

  

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 min-h-screen">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
        {cart.length > 0 ? (
          <div className="space-y-6">
            {cart.map((item) => (
              <Card key={item.id} className="p-6 flex items-center gap-6 shadow-lg rounded-2xl bg-white border border-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                />
                <CardContent className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <Button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400"
                    >
                      -
                    </Button>
                    <span className="text-lg font-bold text-gray-900">{item.quantity}</span>
                    <Button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400"
                    >
                      +
                    </Button>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-blue-700">${(item.price*item.quantity)}</span>
                    <Button
                      onClick={() => onRemove(item.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-500"
                    >
                      <Trash size={18} /> Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>
      {cart.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 h-fit border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="font-semibold">-$0.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-900">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-blue-700 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition duration-300 text-lg font-semibold">
            Checkout 
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
