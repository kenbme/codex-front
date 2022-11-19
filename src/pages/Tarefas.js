import { useState } from "react";
import Task from "../components/task/Task";

function Tarefas({ getToken, getUsername }) {
  const [tasks, setTasks] = useState();
  const getTasks = () => {
    fetch(`http://localhost:4000/users/${getUsername()}/tasks`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        charset: "UTF-8",
        "x-access-token": getToken(),
      },
    })
      .then((response) => response.json())
      .then((json) => setTasks(json))
      .catch((error) => console.log(error));
  };

  var _tasks =
    tasks && tasks.map((task) => <Task key={task._id} task={task} />);

  return getToken() && getUsername() ? (
    <div>
      <button onClick={getTasks}>CARREGAR TAREFAS</button>
      {_tasks}
    </div>
  ) : (
    <div>Não está logado</div>
  );
}

export default Tarefas;
