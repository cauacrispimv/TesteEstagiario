let form = document.getElementById("formJB");

function verificaCampos(event) {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;

  if (nome === "" || email === "" || telefone === "") {
    alert("Todos os campos são obrigatórios.");
  } 
  
  else {
      console.log(`Nome: ${nome}; E-mail: ${email}; Telefone: ${telefone}`);
      form.style.visibility = "hidden";
      
      setTimeout(() => { 
        alert('Obrigado por seu cadastro!'); 
        form.style.visibility = "visible";
    }, 100);
  }
  event.preventDefault();
}

form.addEventListener("submit", verificaCampos);