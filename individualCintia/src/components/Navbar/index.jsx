import { Link } from "react-router-dom";
import "../navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <img className="logo" src="../../src/img/logoCi.png" alt="Rock"  />
      <input type="checkbox" id="toggler" />
      <label for="toggler">
        <i class="ri-menu-line"></i>
      </label>
      <div class="menu">
        <ul id="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
