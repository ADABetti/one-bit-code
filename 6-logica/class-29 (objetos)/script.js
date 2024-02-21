const produto = {
  nome: "caneta",
  preco: 9.99,
  desconto: 0.2,
};

console.log(typeof produto);
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);

produto.quantidade = 5;

console.log(produto);
console.log(produto.quantidade);

let nome = "produto";
let objeto = {};
objeto.produto = "lápis";
console.log(objeto);
console.log(objeto[nome]);
console.log(objeto.produto == objeto[nome]);
console.log(objeto.produto === "lápis");
