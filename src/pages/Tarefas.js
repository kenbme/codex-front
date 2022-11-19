import { useState } from "react";
import Tarefa from "../components/tarefa/Tarefa";

function Tarefas({ user }) {
  const [tasks, setTasks] = useState();
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

  var _tasks =
    tasks &&
    tasks.map((task) => <Tarefa key={task._id} user={user} task={task} />);

  return user ? (
    <main>
      <button onClick={getTasks}>CARREGAR TAREFAS</button>
      {_tasks}
    </main>
  ) : (
    <main>Não está logado</main>
  );
}

export default Tarefas;
