import { useEffect, useState } from "react";

const Shorts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        console.log(response)
        
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="pt-24">Loading products...</p>;
  if (error) return <p className="pt-28">Error: {error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4 pt-28">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
