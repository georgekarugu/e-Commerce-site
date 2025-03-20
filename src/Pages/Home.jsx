import SingleProduct from "../Components/SingleProduct";

const products = [
  {

    id: 1,
    name: "HomePod mini",
    price: 239.00,
    description: "Table with air purifier, stained veneer/black",
    rating: 4.5,
    quantity: 1,
    reviews: 121,
    image: "/image.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Smart Speaker X",
    price: 199.00,
    description: "Wireless speaker with AI assistant, charcoal gray",
    rating: 4.7,
    quantity: 1,
    reviews: 89,
    image: "/path-to-speaker-image.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Smart Speaker X",
    price: 199.00,
    description: "Wireless speaker with AI assistant, charcoal gray",
    rating: 4.7,
    quantity: 1,
    reviews: 89,
    image: "/path-to-speaker-image.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Smart Speaker X",
    price: 199.00,
    description: "Wireless speaker with AI assistant, charcoal gray",
    rating: 4.7,
    quantity:1,
    reviews: 89,
    image: "/path-to-speaker-image.jpg", // Replace with actual image URL
  },
];

function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {products.map((product) => (
      <SingleProduct key={product.id} product={product}/>
    ))}
  </div>
  );
}


export default Home
