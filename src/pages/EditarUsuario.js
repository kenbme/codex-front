import { useState } from "react";

function EditarUsuario({ user, logout }) {
  const [fullname, setFullname] = useState();
  const [birthdate, setBirthdate] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const editarUsuarioSubmit = (e) => {
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
    fetch(`http://localhost:4000/users/${user.username}`, {
      method: "PUT",
      body: JSON.stringify({
        fullname: fullname,
        birthdate: birthdate,
        gender: _gender,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
        charset: " UTF-8",
        "x-access-token": user.token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.errors) {
          window.alert("ERRO: " + JSON.stringify(json.errors));
        } else {
          window.alert("USUÁRIO FOI ATUALIZADO.");
        }
      });
  };

  const deletarConta = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/users/${user.username}`, {
      method: "DELETE",
      headers: {
        headers: {
          "Content-type": "application/json",
          charset: " UTF-8",
          "x-access-token": user.token,
        },
      },
      headers: {
        "Content-type": "application/json",
        charset: " UTF-8",
        "x-access-token": user.token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.errors) {
          window.alert("ERRO: " + JSON.stringify(json.errors));
        }
        window.alert("USUÁRIO DELETADO.");
        logout();
      });
  };

  return (
    <main className="main-editar-usuario">
      <div id="form-editar-usuario">
      <form onSubmit={editarUsuarioSubmit} id="editar-usuario">

        <div className="div-editar-dados"><h1>Editar Usuário</h1></div>
        <hr color="#13678A" />

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
        <input id="btn-concluir" className="btns-edit" type="submit" value="Atualizar conta"></input>
      </form>
      <form onSubmit={deletarConta}>
        <input id="btn-deletar" type="submit" value="Deletar minha conta" />
      </form>
      </div>
    </main>
  );
}

export default EditarUsuario;