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
          <Link to={`/usuarios/${user.username}/editar`}>EDITAR USUARIO</Link>
        </li>
        <li className="navbar-username">Bem Vindo <b>{user.username}</b>!</li>
        <li>
          <button className="btn-logout" onClick={logout}>LOGOUT</button>
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
