import { Search } from "lucide-react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../Contexts/Search/searchProvider";

const SearchProducts = () => {
  const { setSearchResults, setSearching } = useContext(SearchContext);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle search request
  const handleSearch = async () => {
    if (!query.trim()) {
      setSearchResults([]); // Reset results if query is empty
      setSearching(false);
      return;
    }

    setLoading(true);
    setError("");
    setSearching(true); // Mark that a search attempt was made

    try {
      const response = await axios.get("http://localhost:8080/search", {
        params: { query },
      });

      setSearchResults(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      setSearchResults([]); // Ensure empty results
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Clear search results when query is empty
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      setSearching(false);
    }
  }, [query, setSearchResults, setSearching]);

  return (
    <>
      <div className="relative w-72">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} // Support Enter key
        placeholder="Search Product"
        className="w-full py-1 pl-5 pr-12 rounded-full border border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-gray-400 
                  text-gray-600 placeholder-gray-400"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="absolute p-2 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black outline-none"
      >
        <Search size={20} />
      </button>

       {/* Loading Indicator */}
       {loading && <p className="text-gray-400 mt-3 pt-20">Searching...</p>}

{/* Error Message */}
{error && <p className="text-red-500 mt-3 pt-20">{error}</p>}

    </div>
   
    </>
  );
};

export default SearchProducts;
