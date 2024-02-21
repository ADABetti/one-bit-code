function retornarInverso(valor) {
  if (typeof valor == "boolean") {
    return !valor;
  } else if (typeof valor == "number") {
    return valor * -1;
  } else {
    return `Valores booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`;
  }
}

console.log(retornarInverso(9));
console.log(retornarInverso(true));
console.log(retornarInverso(false));
console.log(retornarInverso(-2000));
console.log(retornarInverso("-2000"));
