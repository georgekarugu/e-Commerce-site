import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Search, User, ShoppingCart } from "lucide-react"
import { useContext } from "react";
import { CartContext } from "../Contexts/Cart/cartProvider";
import SearchProducts from "./search";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  

  const {count, setCartCount}= useContext(CartContext)
 

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

    
       <nav className="bg-blue-700 h-20 shadow-md p-7 flex items-center justify-between gap-12 md:gap-3 lg:gap-3 fixed top-0 left-0 z-50 w-full">
     
      <div >
      <Link to="/" className="flex text-xl font-bold items-center gap-2   relative text-white  transition duration-300 
                       before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white 
                       before:transition-all before:duration-300 hover:text-gray-300 
                       hover:before:w-full">Luku Store</Link>
      </div>

      

      {menuOpen && (
    <div
     className="absolute top-20 left-0 w-full bg-blue-700 p-4 flex flex-col items-center space-y-4 md:hidden">
      <div className="relative" ref={dropdownRef}>
      <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex text-xl font-bold items-center gap-2   relative text-white  transition duration-300 
                       before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white 
                       before:transition-all before:duration-300 hover:text-gray-300 
                       hover:before:w-full"
        >
          Category {isOpen ? <ChevronUp size={19} /> : <ChevronDown size={19} />}
        </button>

          {/* Dropdown Menu */}
          {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-96 h-96 bg-white shadow-lg rounded-lg p-4 z-50">
            <h3 className="font-semibold mb-2">Popular Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              
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
              onClick={() => {
                setIsOpen(false);
                setMenuOpen(false);
              }}
              
              >
                💻 Shoes
              </Link>

            </div>
          </div>
        )}

      </div>
          <Link to="/latest" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Latest</Link>
          <Link to="/deals" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Deals</Link>
          <Link to="/account" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Account</Link>
          <Link to="/cart" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Cart</Link>
    </div>
)}

{/* input form */}
<SearchProducts/>


      <div className="hidden lg:flex gap-24 opacity-0 md:opacity-100 transition-opacity duration-1000">
      <div className="relative" ref={dropdownRef}>
      <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex text-xl font-bold items-center gap-2   relative text-white  transition duration-300 
                       before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white 
                       before:transition-all before:duration-300 hover:text-gray-300 
                       hover:before:w-full"
        >
          Category {isOpen ? <ChevronUp size={19} /> : <ChevronDown size={19} />}
        </button>

          {/* Dropdown Menu */}
          {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-96 h-96 bg-white shadow-lg rounded-lg p-4 z-50">
            <h3 className="font-semibold mb-2">Popular Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              
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
 
  
      <Link to="/latest" className="flex text-xl font-bold items-center gap-2   relative text-white  transition duration-300 
                       before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white 
                       before:transition-all before:duration-300 hover:text-gray-300 
                       hover:before:w-full">latest</Link>

      <Link to="/deals" className="flex text-xl font-bold items-center gap-2   relative text-white  transition duration-300 
                       before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white 
                       before:transition-all before:duration-300 hover:text-gray-300 
                       hover:before:w-full">Deals</Link>

<Link to="/account" className="text-xl font-bold items-center gap-2 relative text-white transition duration-300 
                       before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white 
                       before:transition-all before:duration-300 hover:text-gray-300 
                       hover:before:w-full md:flex">
  <User size={30}/>Account
</Link>

<Link to="/admin" className="flex text-xl font-bold items-center gap-2   relative text-white  transition duration-300 
                       before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white 
                       before:transition-all before:duration-300 hover:text-gray-300 
                       hover:before:w-full">Admin</Link>

        
        </div>

   


        <Link to="/cart" className="flex text-xl font-bold items-center gap-2   relative text-white  transition duration-300 
                        before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-white 
                        before:transition-all before:duration-300 hover:text-gray-300 
                        hover:before:w-full">
              <div className="relative">
                          <ShoppingCart size={28} strokeWidth={1.5} />
                          
                          {/* Cart Quantity Badge */}
                          {count > 0 && (
                            <span className="absolute -top-4 -right-1 bg-red-700 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full p-0">
                              {count}
                            </span>
                          )}
              </div>
                  Cart
          </Link>
    
     {/* Mobile Menu */}
     <button 
        className="md:hidden text-white focus:outline-none text-3xl" 
        onClick={() => setMenuOpen(!menuOpen)}
       >
        {menuOpen ? "✖" : "☰"}
      </button>

    
    </nav>
    


  );
}

export default Navbar;
