import { useState, useContext } from "react";
import { CartContext } from "../Contexts/Cart/cartProvider";
import { Heart } from "lucide-react";
import { Card, CardContent } from "../Components/card";
import { Button } from "../Components/button";

const SingleProduct = ({product}) => {

  const {cart, setCart, count, setCartCount  } = useContext(CartContext);
  const [inCart, setInCart] = useState(false); 

  const addToCart = () => {
    setCart([...cart, product]);
    setCartCount(count + 1);
    setInCart(true); 
  }
  return (
    <Card key={product.id} className="p-4 rounded-2xl shadow-md relative">
  <div className="relative w-full h-80 overflow-hidden rounded-lg">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
    />
    <Heart className="absolute top-3 right-3 text-gray-500 cursor-pointer bg-white p-1 rounded-full shadow" />
  </div>
  <CardContent className="p-4">
    <h3 className="text-lg font-semibold truncate">{product.name}</h3>
    <p className="text-gray-500 text-sm truncate">{product.description}</p>
    <div className="flex items-center mt-2">
      <span className="text-green-500 text-lg">★★★★★</span>
      <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
    </div>
    <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">${product.price}</span>

      {!inCart ? (
          <Button
          onClick={addToCart}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Add to Cart
        </Button>
      ) : (
        <Button
        className="bg-green-700 text-white px-4 py-2 rounded-lg"
      >
        Added
      </Button>
      )}

    
    </div>
  </CardContent>
</Card>


  )
}

export default SingleProduct;
