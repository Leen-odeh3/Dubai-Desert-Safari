import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }: { toggle: boolean, setToggle: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <nav style={{ clipPath: toggle ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "none" }} className="navbar">
      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="/" onClick={() => setToggle(false)}>
            <i className="bi bi-house-fill"></i>
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/about" onClick={() => setToggle(false)}>
            <i className="bi bi-bank2"></i>
            About
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/login" onClick={() => setToggle(false)}>
            <i className="bi bi-arrow-right-square-fill"></i>
            Login
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/register" onClick={() => setToggle(false)}>
            <i className="bi bi-person-plus-fill"></i>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
