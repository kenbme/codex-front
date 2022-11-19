import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
  const [username, setUsername] = useState();
  const [fullname, setFullname] = useState();
  const [birthdate, setBirthdate] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const cadastroSubmit = (e) => {
    e.preventDefault();
    var _gender = "";
    switch (gender) {
      case "Masculino":
        _gender = "Male";
        break;
      case "Feminino":
        _gender = "Female";
        break;
      case "Outros":
        _gender = "Other";
    }

    fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        fullname: fullname,
        birthdate: birthdate,
        gender: _gender,
        email: email,
        password: password,
      }),
      headers: { "Content-type": "application/json", charset: "UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.errors) {
          window.alert(JSON.stringify(json.errors));
        } else {
          window.alert("CADASTRADO COM SUCESSO.");
          window.location.href = "/login";
        }
      });
  };

  return (
    <main>
      <div className="main-cadastro">
        <form onSubmit={cadastroSubmit} id="cadastro">
          <div className="divs-cadastro">
            <h1>Cadastro</h1>
          </div>
          <hr color="#13678A" />

          <div className="divs-cadastro">
            <label>Usuário</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="divs-botao"
            />
            <br />
          </div>

          <div className="divs-cadastro">
            <label>Nome completo</label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              className="divs-botao"
            />
            <br />
          </div>

          <div className="divs-cadastro">
            <label>Data de Nascimento</label>
            <input
              onChange={(e) => setBirthdate(e.target.value)}
              type="date"
              min="0"
              className="divs-botao"
            />
            <br />
          </div>

          <div className="divs-cadastro">
            <label>Gênero</label>
            <select
              onChange={(e) => setGender(e.target.value)}
              className="divs-botao"
            >
              <option value=""></option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outros">Outros</option>
            </select>
            <br />
          </div>

          <div className="divs-cadastro">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="divs-botao"
            />
            <br />
          </div>

          <div className="divs-cadastro">
            <label>Senha</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="divs-botao"
            />
          </div>

          <div className="divs-cadastro div-btn-login">
            <input id="btn-cadastro" type="submit" value="Cadastrar" />
          </div>
          <div className="link-cadastro">
            <p>
              Já tem uma conta?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Cadastro; // Outros modulos ter acesso
