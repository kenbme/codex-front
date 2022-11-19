import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
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
        <li>
          <Link to="/tarefas">TAREFAS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
