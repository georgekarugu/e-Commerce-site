import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/latest">latest</Link>
      <Link to="/deals">Deals</Link>
      <Link to="/account">Account</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
