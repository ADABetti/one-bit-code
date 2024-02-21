function duplicar(numero) {
  let resultado = "";

  for (let i = 0; i < numero; i++) {
    resultado += "+";
  }

  return resultado;
}

console.log(duplicar(6));

// solução 2:
function simboloMais(quantidade) {
  return "+".repeat(quantidade);
}

console.log(simboloMais(4));
