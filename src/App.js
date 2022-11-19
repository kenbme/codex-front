import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Tarefas from "./pages/Tarefas";
import EditarUsuario from "./pages/EditarUsuario";
import NavBar from "./components/navbar/NavBar";
import "./style.css";

function setToken(token) {
  sessionStorage.setItem("token", JSON.stringify(token));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const token = JSON.parse(tokenString);
  return token?.token;
}

function setUsername(username) {
  sessionStorage.setItem("username", JSON.stringify(username));
}

function getUsername() {
  const usernameString = sessionStorage.getItem("username");
  const username = JSON.parse(usernameString);
  return username;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route
            path="/login"
            element={<Login setToken={setToken} setUsername={setUsername} />}
          ></Route>
          <Route
            path="/users/editarUsuario"
            element={
              <EditarUsuario getToken={getToken} getUsername={getUsername} />
            }
          ></Route>
          <Route
            path="/tarefas"
            element={<Tarefas getToken={getToken} getUsername={getUsername} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
