import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const loginSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/signin", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: { "Content-type": "application/json", charset: "UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.token) {
          setUser(username, json.token);
          window.location.href = "/tarefas";
        } else {
          window.alert("Usuário ou/e Senha errado(s).");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <main>
      <div className="main-login">
        <form onSubmit={loginSubmit} id="login">
          <div className="divs-login">
            <h1>Login</h1>
          </div>

          <hr color="#13678A" />

          <div className="divs-login">
            <label>Usuario</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="divs-botao"
            />
          </div>

          <div className="divs-login">
            <label>Senha</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="divs-botao"
            />
          </div>

          <div className="div-btn-login">
            <input id="btn-login" type="submit" value="Login" />
          </div>

          <div className="link-cadastro">
            <p>
              Não tem uma conta? <Link to="/cadastro"> Cadastre-se</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
export default Login;
