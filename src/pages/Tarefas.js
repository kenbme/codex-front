function Tarefas({ getToken, getUsername }) {
  if (getToken() && getUsername()) {
    fetch(`http://localhost:4000/users/${getUsername()}/tasks`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        charset: "UTF-8",
        "x-access-token": getToken(),
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    return <div>ok</div>;
  } else {
    return <div>Não está logado</div>;
  }
}

export default Tarefas;
