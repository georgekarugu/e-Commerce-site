import React, { useState } from "react";
import { Button } from "../../Components/button";
import { PlusCircle } from "lucide-react";

const Add = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
    brand: "",
    sex: "",
    seller: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result }); // Base64 string
      console.log(product.image);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!product.image) {
        alert("Please upload an image");
        return;
      }
      const response = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to save product");
      }

      const data = await response.json();
      if (!data.error) alert("Product added successfully!");
      if (data.error) alert("Oops...Something went wrong");
    } catch (err) {
      console.error("Error on Uploading product:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold text-white mb-4">Add New Product</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="p-3 w-full bg-gray-700 rounded text-white"
          />
          <input
            required
            type="text"
            placeholder="Category"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            className="p-3 w-full bg-gray-700 rounded text-white"
          />
          <input
            required
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className="p-3 w-full bg-gray-700 rounded text-white"
          />
          <input
            required
            type="number"
            placeholder="Stock"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
            className="p-3 w-full bg-gray-700 rounded text-white"
          />

          <input
            required
            type="text"
            placeholder="Description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className="p-3 w-full bg-gray-700 rounded text-white"
          />
          <input
            required
            type="text"
            placeholder="Brand"
            value={product.brand}
            onChange={(e) => setProduct({ ...product, brand: e.target.value })}
            className="p-3 w-full bg-gray-700 rounded text-white"
          />
          <input
            required
            type="text"
            placeholder="Sex"
            value={product.sex}
            onChange={(e) => setProduct({ ...product, sex: e.target.value })}
            className="p-3 w-full bg-gray-700 rounded text-white"
          />
          <input
            required
            type="text"
            placeholder="Seller"
            value={product.seller}
            onChange={(e) => setProduct({ ...product, seller: e.target.value })}
            className="p-3 w-full bg-gray-700 rounded text-white"
          />
          <input
            required
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="p-3 w-full bg-gray-700 rounded text-white"
          />
          {product.image && (
            <img
              src={product.image}
              alt="Preview"
              className="w-full h-40 object-cover rounded-md mt-2"
            />
          )}
          <Button
            type="submit"
            disabled={loading}
            className="mt-3 px-5 py-2 bg-blue-500 hover:bg-blue-400 text-white flex items-center gap-2 w-full justify-center"
          >
            <PlusCircle className="w-5 h-5" />{" "}
            {loading ? "Saving..." : "Save Product"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Add;
