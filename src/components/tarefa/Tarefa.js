import { useState } from "react";

export default function Task({ user, task }) {
  const [date, setDate] = useState(task.date);
  const [completed, setCompleted] = useState(task.completed);
  const submit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/users/${user.username}/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        charset: "UTF-8",
        "x-access-token": user.token,
      },
      body: JSON.stringify({ date: date, completed: completed }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json.errors) {
          window.alert("Recarregue as tarefas para visualizar as alterações.");
        } else {
          window.alert("ERRO: " + JSON.stringify(json.errors));
        }
      })
      .catch((error) => console.log(error));
  };
  var _date = new Date(task.date);
  var defaultDate =
    _date.getFullYear() + "-" + (_date.getMonth() + 1) + "-" + _date.getDate();
  return (
    <div>
      <p>ID: {task._id}</p>
      <p>NOME: {task.name}</p>
      <p>DATA: {task.date}</p>
      <p>COMPLETA: {task.completed.toString()}</p>
      <form onSubmit={submit}>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          defaultValue={defaultDate}
        />
        <input
          type="checkbox"
          onChange={(e) => setCompleted(e.target.checked)}
          defaultChecked={task.completed}
        />
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
}
