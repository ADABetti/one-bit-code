function calcularMedia(a, b) {
  let media = (a + b) / 2;
  return media;
}

console.log(calcularMedia(2, 10));

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

console.log(criarProduto("Dell intel i3 8gb", "2000"));

function calcularArea(base, altura) {
  return base * altura;
}

console.log(calcularArea(9, 10));
