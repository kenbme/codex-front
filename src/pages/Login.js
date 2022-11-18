import { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
    const loginSubmit = (e) => {
      e.preventDefault();
        fetch("http://localhost:4000/signin", {
            method: "POST",
            body: JSON.stringify({username: username, password: password}),
            headers: { "Content-type": "application/json", "charset": "UTF-8" },
        })
        .then((response) => response.json())
        .then((json) => {props.setToken(json); props.setUsername(username)})
        .catch((err) => console.log(err));
    };
  return (
    <>
      <nav id="nav-bar">
        <div className="left"></div>
        <div className="right">
          <ul>
            <a href="index.html" className="nav-button">
              APRESENTAÇÃO
            </a>
          </ul>

          <ul>
            <a href="cadastro.html" className="nav-button">
              CADASTRO
            </a>
          </ul>

          <ul>
            <a href="login.html" className="nav-button" id="botao-login">
              LOGIN
            </a>
          </ul>
        </div>
      </nav>
      <div className="main-login">
        <form onSubmit={loginSubmit} id="login">
          <div className="divs-login">
            <h1>Login</h1>
          </div>

          <hr color="#13678A" />

          <div className="divs-login">
            <label>Usuario</label>
            <input onChange={e => setUsername(e.target.value)} type="text" className="divs-botao" />
          </div>

          <div className="divs-login">
            <label>Senha</label>
            <input onChange={e => setPassword(e.target.value)} type="password" className="divs-botao" />
          </div>

          <div className="div-btn-login">
            <input id="btn-login" type="submit" value="Login"/>
          </div>

          <div className="link-cadastro">
            <p>
              Não tem uma conta? <a href="cadastro.html"> Cadastre-se</a>
            </p>
          </div>
        </form>
        
      </div>
    </>
  );
}
export default Login;
