import { useState } from "react";
import { Heart } from "lucide-react";
import { Card, CardContent } from "../Components/card";
import { Button } from "../Components/button";

const products = [
  {

    id: 1,
    name: "HomePod mini",
    price: "$239.00",
    description: "Table with air purifier, stained veneer/black",
    rating: 4.5,
    reviews: 121,
    image: "/image.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Smart Speaker X",
    price: "$199.00",
    description: "Wireless speaker with AI assistant, charcoal gray",
    rating: 4.7,
    reviews: 89,
    image: "/path-to-speaker-image.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Smart Speaker X",
    price: "$199.00",
    description: "Wireless speaker with AI assistant, charcoal gray",
    rating: 4.7,
    reviews: 89,
    image: "/path-to-speaker-image.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Smart Speaker X",
    price: "$199.00",
    description: "Wireless speaker with AI assistant, charcoal gray",
    rating: 4.7,
    reviews: 89,
    image: "/path-to-speaker-image.jpg", // Replace with actual image URL
  },
];

function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {products.map((product) => (
      <Card key={product.id} className="p-4 rounded-2xl shadow-md relative">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover rounded-lg"
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
            <span className="text-xl font-bold">{product.price}</span>
            <Button className="bg-blue-700 text-white px-4 py-2 rounded-lg">Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
  );
}


export default Home
