import { Filter } from "lucide-react";
import { Button } from "../Components/button";

const orders = [
  { id: 1, image: "/macbook.png", name: "Macbook pro 13\"", category: "Laptop", price: "$2399.00", status: "Delivered", statusColor: "bg-green-500" },
  { id: 2, image: "/watch.png", name: "Apple Watch Ultra", category: "Watch", price: "$879.00", status: "Pending", statusColor: "bg-yellow-500" },
  { id: 3, image: "/iphone.png", name: "iPhone 15 Pro Max", category: "SmartPhone", price: "$1869.00", status: "Delivered", statusColor: "bg-green-500" },
  { id: 4, image: "/ipad.png", name: "iPad Pro 3rd Gen", category: "Electronics", price: "$1699.00", status: "Canceled", statusColor: "bg-red-500" },
  { id: 5, image: "/airpods.png", name: "Airpods Pro 2nd Gen", category: "Accessories", price: "$240.00", status: "Delivered", statusColor: "bg-green-500" },
];

export default function Orders() {
  return (
    <div className="p-5 bg-gray-900 text-gray-200">
      <header className="flex justify-between items-center mb-5 border-b border-gray-700 pb-3">
        <h1 className="text-2xl font-bold capitalize text-white">Recent Orders</h1>
        <div className="flex gap-3">
          <Button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button className="border border-gray-400 hover:bg-gray-700 text-white px-4 py-2 rounded-md">See all</Button>
        </div>
      </header>
      
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-3">Products</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-3 flex items-center gap-3">
                  <img src={order.image} alt={order.name} className="w-10 h-10 rounded-md" />
                  <div>
                    <p className="font-medium text-white">{order.name}</p>
                  
                  </div>
                </td>
                <td className="p-3">{order.category}</td>
                <td className="p-3">{order.price}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-white text-sm ${order.statusColor}`}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
