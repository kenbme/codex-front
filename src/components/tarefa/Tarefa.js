import { useState } from "react";
import "./style.css";

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
  
  function editTask() {
    var div_edit_tarefas = document.getElementById("edit-tarefas");
      if (div_edit_tarefas.style.display === "none") {
        div_edit_tarefas.style.display = "flex";
      } else {
        div_edit_tarefas.style.display = "none";
      }
  };

  return ( <>

<div id="main-tarefas">
<h1 className="topico">Tarefas</h1>
<div id="tarefas">
  <div className="div-tarefa">

    <div className="tarefas">
      <div>
        <div className="marcador"><input type="checkbox" defaultChecked={task.completed}/></div>
        <div className="data">
          <p>{task.date}</p>
        </div>
        <div className="titulo">
          <p>{task.name}</p>
        </div>
      </div>
      <div>
        <div className="button"><button type="button" onClick={editTask} id="btn-edit-task"><i className='bx bx-edit'></i></button></div>
      </div>
    </div>

    <div id="edit-tarefas" style={{display: "none"}}>
    <form  onSubmit={submit}>
      <div>
        <div className="marcador">
          <input
            type="checkbox"
            onChange={(e) => setCompleted(e.target.checked)}
            defaultChecked={task.completed}
          />
        </div>
        <div className="data">
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            defaultValue={defaultDate}
          />
        </div>
      </div>
      <div>
        <input id="btn-atualizar" type="submit" value="Atualizar" />
      </div>
      <div>
        <input id="btn-deletar-task" type="submit" value="Deletar" />
      </div>
    </form>
    </div>

  </div>
</div>
</div>
</>);
}