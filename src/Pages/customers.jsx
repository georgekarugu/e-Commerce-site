import { Filter, Eye, Edit, XCircle } from "lucide-react";
import { Button } from "../Components/button";

const customers = [
  { id: 1, avatar: "/user1.png", name: "John Doe", email: "johndoe@example.com", registered: "2024-01-15", orders: 5, status: "Active", statusColor: "bg-green-500" },
  { id: 2, avatar: "/user2.png", name: "Jane Smith", email: "janesmith@example.com", registered: "2023-12-10", orders: 2, status: "Suspended", statusColor: "bg-red-500" },
  { id: 3, avatar: "/user3.png", name: "Alice Brown", email: "alicebrown@example.com", registered: "2024-02-05", orders: 8, status: "Active", statusColor: "bg-green-500" },
  { id: 4, avatar: "/user4.png", name: "Michael Johnson", email: "michaelj@example.com", registered: "2023-11-20", orders: 3, status: "Active", statusColor: "bg-green-500" },
];

export default function Customers() {
  return (
    <div className="p-5 bg-gray-900 text-gray-200">
      <header className="flex justify-between items-center mb-5 border-b border-gray-700 pb-3">
        <h1 className="text-2xl font-bold capitalize text-white">Registered Customers</h1>
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
              <th className="p-3">Customer</th>
              <th className="p-3">Email</th>
              <th className="p-3">Registered</th>
              <th className="p-3">Orders</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-3 flex items-center gap-3">
                  <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium text-white">{customer.name}</p>
                  </div>
                </td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.registered}</td>
                <td className="p-3">{customer.orders}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-white text-sm ${customer.statusColor}`}>{customer.status}</span>
                </td>
                <td className="p-3 flex gap-2">
                  <Button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md">
                    <Eye className="w-4 h-4 text-white" />
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-500 p-2 rounded-md">
                    <Edit className="w-4 h-4 text-white" />
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-500 p-2 rounded-md">
                    <XCircle className="w-4 h-4 text-white" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
