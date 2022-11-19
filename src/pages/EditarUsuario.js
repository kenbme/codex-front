import { useState } from "react";

function EditarUsuario({ user }) {
  const [fullname, setFullname] = useState();
  const [birthdate, setBirthdate] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  if (user) {
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
        .then((json) => console.log(json));
    };
    return (
      <main>
        <form onSubmit={editarUsuarioSubmit}>
          <div class="div-editar-dados">
            <h1>Editar Usuário</h1>
          </div>
          <hr color="#13678A" />

          <div class="div-editar-dados">
            <label>Nome completo</label>
            <input type="text" class="divs-botao" />
            <br />
          </div>

          <div class="div-editar-dados">
            <label>Data de Nascimento</label>
            <input type="text" min="0" class="divs-botao" />
            <br />
          </div>

          <div class="div-editar-dados">
            <label>Gênero</label>
            <input type="text" class="divs-botao" />
            <br />
          </div>

          <div class="div-editar-dados">
            <label>Email</label>
            <input type="text" class="divs-botao" />
            <br />
          </div>

          <div class="div-editar-dados">
            <label>Senha</label>
            <input type="password" class="divs-botao" />
          </div>

          <div class="div-editar-dados div-btns-editar">
            <input class="btns-edit" type="submit" value="Concluir" />
          </div>
        </form>
        <form>
          <input type="submit" value="Deletar minha conta" />
        </form>
      </main>
    );
  } else {
    return <main>Não está logado</main>;
  }
}

export default EditarUsuario;
