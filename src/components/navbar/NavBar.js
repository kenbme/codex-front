import "./style.css";
import { Link } from "react-router-dom";

function NavBar({ user, logout }) {
  return user ? (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">APRESENTAÇÃO</Link>
        </li>
        <li>
          <Link to={`/usuarios/${user.username}/tarefas`}>TAREFAS</Link>
        </li>
        <li>
          <Link to={`/usuarios/${user.username}/editar`}>EDITAR_USUARIO</Link>
        </li>
        <li>BEM VINDO {user.username}!</li>
        <li>
          <button onClick={logout}>LOGOUT</button>
        </li>
      </ul>
    </nav>
  ) : (
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
      </ul>
    </nav>
  );
}

export default NavBar;
