import "./style.css";
import { Link } from "react-router-dom";

function NavBar({ user, logout }) {
  
  function showNavBar(e) {
    var btnMenuArrow = document.getElementById("btnMenuArrow");
    var optionsNavbar = document.getElementById("options-navbar");
    console.log(e);
    if (optionsNavbar.style.display === "") {
      optionsNavbar.style.display = "none"
    }
    if (optionsNavbar.style.display === "none") {
      optionsNavbar.style.display = "flex";
      btnMenuArrow.classList.add("bx-chevron-up");
      btnMenuArrow.classList.remove("bx-menu");
    } else {
      optionsNavbar.style.display = "none";
      btnMenuArrow.classList.add("bx-menu");
      btnMenuArrow.classList.remove("bx-chevron-up");
    }
  }

  return user ? (
    <nav className="nav-bar">
      <ul id="options-navbar" >
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
      <div><button className="btn-navbar" onClick={showNavBar} type="button"><i id="btnMenuArrow" class='bx bx-menu'></i></button></div>
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
