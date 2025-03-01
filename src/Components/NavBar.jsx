import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

    // Function to close dropdown when clicking outside
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Add event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Cleanup listener when component unmounts
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

  return (
    <nav className="bg-blue-700 shadow-md p-4 flex items-center justify-between">
      <div className="relative" ref={dropdownRef}>
      <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 font-semibold text-black"
        >
          Category {isOpen ? <ChevronUp size={19} /> : <ChevronDown size={19} />}
        </button>

          {/* Dropdown Menu */}
          {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
            <h3 className="font-semibold mb-2">Popular Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              
              <Link to="categories/shirts" className="flex items-center gap-2 p-2 border rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(false)}>
                🪑 Shirts
              </Link>

              <Link to="categories/shorts" className="flex items-center gap-2 p-2 border rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(false)}>
                👟 Shorts
              </Link>

              <Link to="categories/trousers" className="flex items-center gap-2 p-2 border rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(false)}>
                💻 Trousers
              </Link>

              <Link to="categories/shoes" className="flex items-center gap-2 p-2 border rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(false)}>
                💻 Shoes
              </Link>

            </div>
          </div>
        )}

      </div>

      
      
      <Link to="/" 
      className="relative text-lg font-semibold text-gray-300 transition duration-300 
             before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gray-300 
             before:transition-all before:duration-300 hover:text-red-600 
             hover:before:w-full">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/latest">latest</Link>
      <Link to="/deals">Deals</Link>
      <input></input>
      <Link to="/account">Account</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
