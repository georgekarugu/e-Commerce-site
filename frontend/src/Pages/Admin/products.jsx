import {  Edit, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

// const products = [
//   { id: 1, image: "/macbook.png", name: "Macbook Pro 13\"", category: "Laptop", price: "$2399.00", stock: 12, status: "In Stock", statusColor: "bg-green-500" },
//   { id: 2, image: "/watch.png", name: "Apple Watch Ultra", category: "Watch", price: "$879.00", stock: 5, status: "In Stock", statusColor: "bg-green-500" },
//   { id: 3, image: "/iphone.png", name: "iPhone 15 Pro Max", category: "Smartphone", price: "$1869.00", stock: 0, status: "Out of Stock", statusColor: "bg-red-500" },
//   { id: 4, image: "/ipad.png", name: "iPad Pro 3rd Gen", category: "Electronics", price: "$1699.00", stock: 7, status: "In Stock", statusColor: "bg-green-500" },
//   { id: 5, image: "/airpods.png", name: "AirPods Pro 2nd Gen", category: "Accessories", price: "$240.00", stock: 2, status: "In Stock", statusColor: "bg-green-500" },
// ];



export default function Products() {

  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // Store product being edited
  const [updatedProduct, setUpdatedProduct] = useState({ name: "", price: "", stock: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

useEffect(() => {
  axios.get("http://localhost:8080/products")
    .then(response => {
      setProducts(response.data); // Store the response in state
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
}, []);

  // Open the edit form
  const handleEdit = (product) => {
    setEditingProduct(product);
    setUpdatedProduct({ name: product.name, price: product.price, stock: product.stock });
  };

  // Handle form changes
  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  // Submit updated product to the database
  const handleUpdate = async () => {
    const trimmedId = editingProduct?._id.trim(); // Remove any spaces

    try {
      const response = await fetch(`http://localhost:8080/products/${trimmedId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) throw new Error("Failed to update product");

      // Update UI without reloading
      setProducts((prev) =>
        prev.map((p) => (p._id === editingProduct._id ? { ...p, ...updatedProduct } : p))
      );

      setEditingProduct(null); // Close edit form
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  // Delete product from the database
  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    setLoading(true);
    try {
        const res = await fetch("http://localhost:8080/products", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: productId }),
        });

        const data = await res.json();
        if (res.ok) {
            setProducts(products.filter(product => product._id !== productId));
            alert("Product deleted successfully!");
        } else {
            alert(data.error || "Failed to delete product.");

        }
    } catch (err) {
        console.error(err);
        alert("Something went wrong.");
        setError(err)
    }
    setLoading(false);
};


  return (
    <div className="p-5 bg-gray-900 text-gray-200">
      <h1 className="text-2xl font-bold capitalize text-white">Product Inventory</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
            {loading && <p>Loading...</p>}

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-3 text-white">{product.name}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">{product.stock} units</td>
                <td className="p-3 flex gap-2">
                  <button onClick={() => handleEdit(product)} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-md">
                    <Edit className="w-4 h-4 text-white" />
                  </button>
                  <button 
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-600 hover:bg-red-500 p-2 rounded-md">
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Form (Appears Only When Editing) */}
      {editingProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-white mb-4">Edit Product</h2>
            <input
              className="w-full mb-2 p-2 rounded-md bg-gray-700 text-white"
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleChange}
            />
            <input
              className="w-full mb-2 p-2 rounded-md bg-gray-700 text-white"
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
            />
            <input
              className="w-full mb-2 p-2 rounded-md bg-gray-700 text-white"
              type="number"
              name="stock"
              value={updatedProduct.stock}
              onChange={handleChange}
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setEditingProduct(null)} className="bg-gray-600 hover:bg-gray-500 p-2 rounded-md">Cancel</button>
              <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-500 p-2 rounded-md">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};