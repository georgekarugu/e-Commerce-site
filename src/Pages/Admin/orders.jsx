import { Filter } from "lucide-react";
import { Button } from "../../Components/button";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/orders")
      .then((res) => res.json())
      .then((response) => {
        setOrders(response);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-5 bg-gray-900 text-gray-200">
      <header className="flex justify-between items-center mb-5 border-b border-gray-700 pb-3">
        <h1 className="text-2xl font-bold capitalize text-white">
          Recent Orders
        </h1>
        <div className="flex gap-3">
          <Button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button className="border border-gray-400 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
            See all
          </Button>
        </div>
      </header>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        {orders &&
          orders.map((order, _index) => (
            <div key={_index}>
              <div className="flex justify-between">
                <p className="underline my-2">{order._id}</p>
                <p
                  className={`px-3 py-1 rounded-full text-sm ${
                    order.status.toUpperCase() == "PENDING"
                      ? "text-orange-500"
                      : "text-green-500"
                  }`}
                >
                  {order.status}
                </p>
              </div>
              <table className="w-full text-left text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-3">Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.length > 0 &&
                    order.items.map((item, index) => (
                      <tr
                        key={index}
                        className="bitem-b bitem-gray-700 hover:bg-gray-700"
                      >
                        <td className="p-3 flex items-center gap-3">
                          <img
                            src={item[0].image}
                            alt={item[0].name}
                            className="w-10 h-10 rounded-md"
                          />
                          <div>
                            <p className="font-medium text-white">
                              {item[0].name}
                            </p>
                          </div>
                        </td>
                        <td className="p-3">{item[0].category}</td>
                        <td className="p-3">{item[0].price}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </div>
  );
}
