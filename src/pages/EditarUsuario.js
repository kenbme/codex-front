import { useState } from "react";

function EditarUsuario({ getToken, getUsername }) {
  const [fullname, setFullname] = useState();
  const [birthdate, setBirthdate] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  if (getToken() && getUsername()) {
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

      fetch(`http://localhost:4000/users/${getUsername()}`, {
        method: "PUT",
        body: JSON.stringify({
          fullname: fullname,
          birthdate: birthdate,
          gender: _gender,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json", "charset":" UTF-8",
          "x-access-token": getToken(),
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    };
    return <div>Entrou em editar</div>;
  } else {
    return <div>Não está logado</div>;
  }
}

export default EditarUsuario;
