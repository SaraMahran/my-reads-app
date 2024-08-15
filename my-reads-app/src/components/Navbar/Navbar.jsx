import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="website-name">
        <Link to="/">My Reads App</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="link">
          <Link to="/search">Search Books</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
