function Cadastro() {
    const submit = () => {
        const data = Object.fromEntries(new FormData(document.querySelector('#cadastro')).entries())
        if (data.gender === 'Masculino'){
            data.gender = 'Male'
        } 
        else if (data.gender === 'Feminino'){
            data.gender = 'Female'
        }
        else if (data.gender === 'Outros'){
            data.gender = 'Other'
        }

        data.birthdate = Date(data.birthdate)
        fetch("http://localhost:4000/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
    
    console.log(data.birthdate)}
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
      <div className="main-cadastro">
        <form id="cadastro">
          <div className="divs-cadastro">
            <h1>Cadastro</h1>
          </div>
          <hr color="#13678A" />

          <div className="divs-cadastro">
            <label for="usuario">Usuário</label>
            <input name="username" type="text" className="divs-botao" />
            <br />
          </div>

          <div className="divs-cadastro">
            <label for="nome-completo">Nome completo</label>
            <input name="fullname" type="text" className="divs-botao" />
            <br />
          </div>

          <div className="divs-cadastro">
            <label for="data-nascimento">Data de Nascimento</label>
            <input
              name="birthdate"
              type="text"
              min="0"
              className="divs-botao"
            />
            <br />
          </div>

          <div className="divs-cadastro">
            <label for="genero">Gênero</label>
            <select className="divs-botao" name="gender">
              <option value=""></option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outros">Outros</option>
            </select>
            <br />
          </div>

          <div className="divs-cadastro">
            <label for="email">Email</label>
            <input name="email" type="text" className="divs-botao" />
            <br />
          </div>

          <div className="divs-cadastro">
            <label for="senha">Senha</label>
            <input name="password" type="password" className="divs-botao" />
          </div>

          <div className="divs-cadastro div-btn-login">
            
          </div>

          <div className="link-cadastro">
            <p>
              Já tem uma conta? <a href="login.html">Login</a>
            </p>
          </div>
        </form>
        <input onClick={submit} type="submit" value="Cadastrar" />
      </div>
    </>
  );
}

export default Cadastro; // Outros modulos ter acesso
