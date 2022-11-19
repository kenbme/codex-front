import { useState } from "react";

export default function Task({ task }) {
  const [date, setDate] = useState();
  const [completed, setCompleted] = useState();
  const submit = (e) => {
    e.preventDefault();
  };
  var _date = new Date(task.date);
  var defaultDate =
    _date.getFullYear() + "-" + (_date.getMonth() + 1) + "-" + _date.getDate();
  return (
    <div>
      <p>ID: {task._id}</p>
      <p>NAME: {task.name}</p>
      <p>DATE: {task.date}</p>
      <p>COMPLETED: {task.completed.toString()}</p>
      <form onSubmit={submit}>
        <input type="date" defaultValue={defaultDate} />
        <input type="checkbox" defaultChecked={task.completed} />
        <input type="submit" />
      </form>
    </div>
  );
}
