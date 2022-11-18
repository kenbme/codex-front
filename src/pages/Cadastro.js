function Cadastro() {
    return (<>
    <nav id="nav-bar">
    <div class="left"></div>
    <div class="right">

      <ul><a href="index.html" class="nav-button">APRESENTAÇÃO</a></ul>
      
      <ul><a href="cadastro.html" class="nav-button">CADASTRO</a></ul>
      
      <ul><a href="login.html" class="nav-button" id="botao-login">LOGIN</a></ul>
      
    </div>
  </nav>
    <form id = "cadastro">
    <div class="divs-cadastro"><h1>Cadastro</h1></div>
      <hr color="#13678A"/>
      
      
      <div class="divs-cadastro">
        <label for="usuario">Usuário</label>
        <input id="usuario" type="text" class="divs-botao"/><br/>
      </div>
      
      <div class="divs-cadastro">
        <label for="nome-completo">Nome completo</label>
        <input id="nome-completo" type="text" class="divs-botao"/><br/>
      </div>
      
      <div class="divs-cadastro">
        <label for="data-nascimento">Data de Nascimento</label>
        <input id="data-nascimento" type="text" min="0" class="divs-botao"/><br/>
      </div>

      <div class="divs-cadastro"> 
        <label for="genero">Gênero</label>
        <select class="divs-botao">
          <option value=""></option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outros">Outros</option>
        </select><br/>
      </div>
      
      <div class = "divs-cadastro">
        <label for="email">Email</label>
        <input id="email" type="text" class="divs-botao"/><br/>
      </div>
      
      <div class="divs-cadastro">
        <label for="senha">Senha</label>
        <input id="senha" type="password" class="divs-botao"/>
      </div>

      <div class="divs-cadastro div-btn-login">
        <input id="btn-cadastro" type="submit" value="Cadastrar"/>
      </div>

      <div class="link-cadastro">
        <p>Já tem uma conta? <a href="login.html">Login</a></p>
      </div></form></>)
}

export default Cadastro; // Outros modulos ter acesso
