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
          <Link to="/tarefas">TAREFAS</Link>
        </li>
        <li>
          <Link to="/users/editarUsuario">EDITAR_USUARIO</Link>
        </li>
      </ul>
      <lu>
        <li>BEM VINDO {user.username}!</li>
      </lu>
      <lu>
        <li>
          <button onClick={logout}>LOGOUT</button>
        </li>
      </lu>
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
