import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/cadastro" element={"CADASTRO"}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users/editarUsuario" element={"EDITAR USUÁRIO"}></Route>
        <Route path="/tarefas" element={"TAREFAS"}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
