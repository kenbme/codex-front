function Login() {
    const submit = () => {
        const data = Object.fromEntries(new FormData(document.querySelector('#login')).entries());
        fetch("http://localhost:4000/signin", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
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
        <form id="login">
          <div className="divs-login">
            <h1>Login</h1>
          </div>

          <hr color="#13678A" />

          <div className="divs-login">
            <label>Usuario</label>
            <input name="username" type="text" className="divs-botao" />
          </div>

          <div className="divs-login">
            <label>Senha</label>
            <input name="password" type="text" className="divs-botao" />
          </div>

          <div className="div-btn-login">
            
          </div>

          <div className="link-cadastro">
            <p>
              Não tem uma conta? <a href="cadastro.html"> Cadastre-se</a>
            </p>
          </div>
        </form>
        <button id="btn-login" onClick={submit}>Login</button>
      </div>
    </>
  );
}
export default Login;
