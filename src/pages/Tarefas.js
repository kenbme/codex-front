import { useState } from "react";
import Tarefa from "../components/tarefa/Tarefa";

function Tarefas({ user }) {
  const [tasks, setTasks] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();

  const getTasks = () => {
    fetch(`http://localhost:4000/users/${user.username}/tasks`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        charset: "UTF-8",
        "x-access-token": user.token,
      },
    })
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks))
      .catch((error) => console.log(error));
  };

  const adicionaTarefa = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/users/${user.username}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        charset: "UTF-8",
        "x-access-token": user.token,
      },
      body: JSON.stringify({ name: name, date: date }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.errors) {
          window.alert("ERRO: " + JSON.stringify(json.errors));
        } else {
          window.alert("TAREFA ADICIONADA. RECARREGUE PARA VISUALIZAR.");
        }
      });
  };

  var _tasks =
    tasks &&
    tasks.map((task) => <Tarefa key={task._id} user={user} task={task} />);

  return user ? (
    <main id="tasks">
      <form onSubmit={adicionaTarefa} className="form-new-task">
        <div>
          <input type="text" placeholder="Nova tarefa" onChange={(e) => setName(e.target.value)}></input>
          <input type="date" onChange={(e) => setDate(e.target.value)}></input>
          <input type="submit" value="ENVIAR"></input>
        </div>
      </form>
      <button id="btn-load-tasks" onClick={getTasks}>CARREGAR TAREFAS</button>
      <h1 className="topico">Tarefas</h1>
      {_tasks}
    </main>
  ) : (
    <main>Não está logado</main>
  );
}

export default Tarefas;
