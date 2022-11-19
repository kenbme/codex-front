import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div class="left"></div>
      <div class="right">
        <ul>
          <li>
            <Link to="/">APRESENTAÇÃO</Link>
          </li>
          <li>
            <Link to="/cadastro">CADASTRO</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
