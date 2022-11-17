import NavBar from "../components/navbar/NavBar";
import { useEffect, useState } from "react";

function Index() {
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    fetch("http://localhost:4000/signin", {
      method: "POST",
      body: JSON.stringify({
        username: "Joao12",
        password: "senhaDificil123!",
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setToken(json.token))
      .catch((err) => console.log(err));
  }, []);

  console.log(token);

  return (
    <>
      <NavBar />
      <main>
        <div id="apresentacao">
          <h1>Codex - Project</h1>
          <hr color="#13678A" />
          <p className="paragrafo">
            {" "}
            Esse projeto tem por objetivo mostar a interatividade entre o
            front-end e o back-end através de uma API. Com isso, criamos um
            sistema na qual o usuário consegue se logar, cadastrar-se e ainda
            fazer alterações na sua conta, uma delas é deletar à própria. Além
            de ser um To-do List, o usúario ele consegue adicionar, remover ou
            editar as suas tarefas do dia.
          </p>
          <div id="div-imagem">
            <img
              src="/images/api.png"
              id="imagem-apresentação"
              width="300px"
              height="300px"
              border="5px"
              className="imagem-apresentacao"
              alt="garçom"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Index;
