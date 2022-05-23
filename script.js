console.log("Java script carregado no live server");

function validaCPF(cpf) {
  // for (var i in cpf) {
  //   if (type(i) != number) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  return true;
}

function validacao() {
  console.log("Validação iniciada");
  var cpf = document.getElementById("cpf_digitado").value;
  console.log(cpf);
  var resultadoValidacao = validaCPF(cpf);
  if (resultadoValidacao) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
