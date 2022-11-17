import "./App.css";
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/cadastro" element={"CADASTRO"}></Route>
        <Route path="/login" element={"LOGIN"}></Route>
        <Route path="/users/editarUsuario" element={"EDITAR USUÁRIO"}></Route>
        <Route path="/tarefas" element={"TAREFAS"}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
