// high function order são funções que chamam outra função

function calcular(a, b, operacao) {
  console.log("Realizando uma operação");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  return x + y;
}

function subtrair(s, t) {
  return s - t;
}

console.log(calcular(4, 9, somar));
console.log(calcular(40, 30, subtrair));
