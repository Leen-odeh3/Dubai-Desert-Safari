import { Link } from "react-router-dom";

type ClipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";


const Navbar = ({ toggle }: { toggle: boolean }) => {
  const clipPathValue: ClipPath | undefined = toggle
    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    : undefined;

  return (
    <nav style={{ clipPath: clipPathValue }} className="navbar">
      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="/">
            <i className="bi bi-house-fill"></i>
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/about">
            <i className="bi bi-bank2"></i>
            About
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/login">
            <i className="bi bi-arrow-right-square-fill"></i>
            Login
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/register">
            <i className="bi bi-person-plus-fill"></i>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
