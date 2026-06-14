import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🎬 Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/favorites"
          className={location.pathname === "/favorites" ? "active" : ""}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
