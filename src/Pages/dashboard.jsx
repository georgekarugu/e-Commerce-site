import { useState } from "react";
import { Button } from "../Components/button";
import { PlusCircle } from "lucide-react";
import { Card, CardContent } from "../Components/card";

export default function AddProduct() {
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result }); // Base64 string
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data: ", product);
  };

  return (
    <>
     <div className="grid grid-cols-3 gap-6">
                  <Card className="bg-gray-800 shadow-md">
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold text-white">Total Sales</h3>
                      <p className="text-3xl text-green-400 font-bold">$12,340</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-800 shadow-md">
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold text-white">Total Orders</h3>
                      <p className="text-3xl text-blue-400 font-bold">345</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-800 shadow-md">
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold text-white">Total Customers</h3>
                      <p className="text-3xl text-yellow-400 font-bold">120</p>
                    </CardContent>
                  </Card>
                </div>

        <div className="p-6 bg-gray-900 text-gray-200 min-h-screen flex justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-xl font-bold text-white mb-4">Add New Product</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Product Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} className="p-3 w-full bg-gray-700 rounded text-white"/>
                <input type="text" placeholder="Category" onChange={(e) => setProduct({ ...product, category: e.target.value })} className="p-3 w-full bg-gray-700 rounded text-white"/>
                <input type="number" placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} className="p-3 w-full bg-gray-700 rounded text-white"/>
                <input type="text" placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} className="p-3 w-full bg-gray-700 rounded text-white"/>
                <input type="text" placeholder="Brand" onChange={(e) => setProduct({ ...product, brand: e.target.value })} className="p-3 w-full bg-gray-700 rounded text-white"/>
                <input type="text" placeholder="Sex" onChange={(e) => setProduct({ ...product, sex: e.target.value })} className="p-3 w-full bg-gray-700 rounded text-white"/>
                <input type="text" placeholder="Seller" onChange={(e) => setProduct({ ...product, seller: e.target.value })} className="p-3 w-full bg-gray-700 rounded text-white"/>
                <input type="file" onChange={handleFileChange} className="p-3 w-full bg-gray-700 rounded text-white"/>
                {product.image && <img src={product.image} alt="Preview" className="w-full h-40 object-cover rounded-md mt-2" />}
                <Button type="submit" className="mt-3 px-5 py-2 bg-blue-500 hover:bg-blue-400 text-white flex items-center gap-2 w-full justify-center">
                  <PlusCircle className="w-5 h-5" /> Save Product
                </Button>
              </form>
            </div>
        </div>
    </>
    
  );
}
