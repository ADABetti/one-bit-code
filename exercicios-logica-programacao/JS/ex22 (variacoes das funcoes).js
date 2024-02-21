// Função com entrada e retorno
function somar(a, b) {
  return a + b;
}

let valor = somar(3, 8);
console.log(valor);
console.log(somar(2, 50));

// função com entrada e sem retorno
function multiplicar(c, d) {
  console.log(c * d);
}

let multiplicacao = multiplicar(1, 3);
multiplicar(9, 7);

//função sem entrada com retorno
function retornarDataAtual() {
  return new Date();
}

console.log(retornarDataAtual());

// função sem parâmetro e sem retorno
function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual();
