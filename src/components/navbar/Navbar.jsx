import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const item = useSelector((state)=>state.cart)
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <span>Redux-Toolkit</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart {item.length > 0 ? (item.length) : null}</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
