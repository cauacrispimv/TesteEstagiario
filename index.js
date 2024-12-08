function verificaCampos(event) {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;

  if (nome === "" || email === "" || telefone === "") {
    alert("Todos os campos são obrigatórios.");
  } else {
    console.log(`Nome: ${nome}; E-mail: ${email}; Telefone: ${telefone}`);
  }

  event.preventDefault();
}

let form = document.getElementById("formJB");
form.addEventListener("submit", verificaCampos);