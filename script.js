// Funcionalidade pagina index

function mostraValor() {
  alert(
    "Seus dados foram cadastrados no nome de " +
      inputNome.value +
      ". Você receberá mensagens no enderaço de email: " +
      inputEmail.value
  );
}

function erro() {
  alert("Você precisa preencher todos os campos");
}

function pegaDados() {
  inputNome = document.querySelector("#nome");
  inputEmail = document.querySelector("#email");

  if (inputNome.value.length == 0 || inputEmail.value.length == 0) {
    erro();
  } else {
    mostraValor();
  }
}

// Funcionalidade pagina Login

function pegaDadosLogin() {
  inputUser = document.querySelector("#user");
  inputSenha = document.querySelector("#senha");

  if (inputUser.value.length < 5 || inputSenha.value.length < 5) {
    erroLogin();
  } else {
    logar();
  }
}

function logar() {
  alert("Você foi logado com sucesso e pode retornar para a pagina principal");
  setInterval(logado(), 1000);

}
function erroLogin() {
  alert("Você precisa preencher todos os campos");
}

function logado(){
  $("#usuario").show();
  $("#login").hide();
}