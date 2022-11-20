import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Tarefas from "./pages/Tarefas";
import EditarUsuario from "./pages/EditarUsuario";
import NavBar from "./components/navbar/NavBar";
import "./style.css";

function setUser(username, token) {
  sessionStorage.setItem("username", JSON.stringify(username));
  sessionStorage.setItem("token", JSON.stringify(token));
}

function logout() {
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("token");
  window.location.href = "/login";
}

const getUser = () => {
  const tokenString = sessionStorage.getItem("token");
  const usernameString = sessionStorage.getItem("username");
  const token = JSON.parse(tokenString);
  const username = JSON.parse(usernameString);
  return token && username ? { username, token } : undefined;
};

function App() {
  const user = getUser();
  return user ? (
    <>
      <BrowserRouter>
        <NavBar user={user} logout={logout} />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route
            path={`/usuarios/${user.username}/editar`}
            element={<EditarUsuario user={user} logout={logout} />}
          ></Route>
          <Route
            path={`/usuarios/${user.username}/tarefas`}
            element={<Tarefas user={user} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  ) : (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
