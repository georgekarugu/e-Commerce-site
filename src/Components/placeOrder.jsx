import { useState } from "react";
import axios from "axios";

const PlaceOrder = ({ cartItems, userId, total }) => {
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {

    //setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/orders",
        {
          items: cartItems,
          totalAmount:total,
          //paymentMethod: "Credit Card",  Can be dynamic
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Send token
        }
      );

      alert("Order placed successfully!");
      console.log(response.data);
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
