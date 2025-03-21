import SingleProduct from "../Components/SingleProduct";

const products = [
  {

    id: 1,
    name: "HomePod mini",
    price: 239.00,
    description: "Table with air purifier, stained veneer/black",
    rating: 4.5,
    quantity: 1,
    seller:"Luku store",
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
    image: "shirt.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Smart Speaker X",
    price: 199.00,
    description: "Wireless speaker with AI assistant, charcoal gray",
    rating: 4.7,
    quantity: 1,
    reviews: 89,
    image: "/s.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Smart Speaker X",
    price: 199.00,
    description: "Wireless speaker with AI assistant, charcoal gray",
    rating: 4.7,
    quantity:1,
    reviews: 89,
    image: "/ss.jpg", // Replace with actual image URL
  },
];

function Home() {
  return (
    <>
    <div
        className="relative h-screen w-screen bg-cover bg-center "
        style={{  backgroundImage: "url('/ss.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          width: "100%", }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content Section */}
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-extrabold mb-4">
            Shopping And Departmental Store
          </h1>
          <p className="text-lg max-w-2xl">
            At <span className="font-semibold text-green-400">Gransa Pharmaciticals</span>, 
            we are committed to providing quality medications, expert advice, and 
            personalized care. From prescriptions to wellness products, we’re here 
            to support your health journey with compassion and expertise.
          </p>
          <button  className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="p-4">
      <h2 className="text-4xl font-bold mb-4 mt-4">
      Whats New!
          </h2>
      </div>
      

      {/* Product Section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product}/>
        ))}
      </div>
    </>
 
  );
}


export default Home
