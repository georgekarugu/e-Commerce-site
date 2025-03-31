import { useState, useEffect } from "react";
import axios from "axios";
import SingleProduct from "../../Components/SingleProduct";
const  Trousers= () => {
  // const { category } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products?category=trousers`);
        console.log(response)
        setProducts(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Re-run when category changes

  return (
    <>

      {loading && <p className="pt-24">Loading products...</p>}
      {error && <p className="text-red-500 pt-24">{error}</p>}
    
          {/* Default Product Listing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pt-24">
            {products.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))}
          </div>
    </>
  );
};

export default Trousers;

