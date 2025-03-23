import { Filter, Edit, Trash2 } from "lucide-react";
import { Button } from "../../Components/button";
import { useState } from "react";

const products = [
  { id: 1, image: "/macbook.png", name: "Macbook Pro 13\"", category: "Laptop", price: "$2399.00", stock: 12, status: "In Stock", statusColor: "bg-green-500" },
  { id: 2, image: "/watch.png", name: "Apple Watch Ultra", category: "Watch", price: "$879.00", stock: 5, status: "In Stock", statusColor: "bg-green-500" },
  { id: 3, image: "/iphone.png", name: "iPhone 15 Pro Max", category: "Smartphone", price: "$1869.00", stock: 0, status: "Out of Stock", statusColor: "bg-red-500" },
  { id: 4, image: "/ipad.png", name: "iPad Pro 3rd Gen", category: "Electronics", price: "$1699.00", stock: 7, status: "In Stock", statusColor: "bg-green-500" },
  { id: 5, image: "/airpods.png", name: "AirPods Pro 2nd Gen", category: "Accessories", price: "$240.00", stock: 2, status: "In Stock", statusColor: "bg-green-500" },
];

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:8080/products")
//     .then(response => {
//       setProducts(response.data); // Store the response in state
//     })
//     .catch(error => {
//       console.error("Error fetching products:", error);
//     });
// }, []);

export default function Products() {
  return (
    <div className="p-5 bg-gray-900 text-gray-200">
      <header className="flex justify-between items-center mb-5 border-b border-gray-700 pb-3">
        <h1 className="text-2xl font-bold capitalize text-white">Product Inventory</h1>
        <div className="flex gap-3">
        <Button className="border border-gray-400 hover:bg-gray-700 text-white px-4 py-2 rounded-md">Add Product</Button>
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
              <th className="p-3">Product</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-3 flex items-center gap-3">
                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded-md" />
                  <div>
                    <p className="font-medium text-white">{product.name}</p>
                  </div>
                </td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">{product.price}</td>
                <td className="p-3">{product.stock} units</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-white text-sm ${product.statusColor}`}>{product.status}</span>
                </td>
                <td className="p-3 flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-500 p-2 rounded-md">
                    <Edit className="w-4 h-4 text-white" />
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-500 p-2 rounded-md">
                    <Trash2 className="w-4 h-4 text-white" />
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