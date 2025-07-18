import { useState, useEffect } from "react";
import axios from "axios";

const PlaceOrder = ({ cartItems, userId, total }) => {
  const [loading, setLoading] = useState(false);
  const [cartItemsIDs, setCartItemsIDs] = useState([]);

  useEffect(() => {
    for (let item of cartItems) {
      item._id && setCartItemsIDs([...cartItemsIDs, item._id]);
    }
  }, []);
  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post("http://localhost:8080/orders", {
        items: cartItemsIDs,
        totalAmount: total,
        //paymentMethod: "Credit Card",  Can be dynamic
      });
      console.log(cartItemsIDs);
      if (await response.data.error) {
        alert("Failed to place order");
        return;
      }
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePlaceOrder}
      className="w-full bg-blue-700 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition duration-300 text-lg font-semibold"
      disabled={loading}
    >
      {loading ? "Placing Order..." : "Place Order"}
    </button>
  );
};

export default PlaceOrder;
