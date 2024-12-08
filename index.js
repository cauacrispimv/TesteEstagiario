function verificaCampos(event) {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;

  if (nome === "" || email === "" || telefone === "") {
    alert("Todos os campos são obrigatórios.");
    event.preventDefault();
  } else {
    console.log(nome, email, telefone);
  }
}

let form = document.getElementById("formJB");
form.addEventListener("submit", verificaCampos);