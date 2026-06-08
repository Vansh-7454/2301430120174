import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        All Notifications
      </Link>

      <Link to="/priority">
        Priority Notifications
      </Link>
    </nav>
  );
}

export default Navbar;