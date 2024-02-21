let produto = {
  nome: "Ipad",
  preco: 5000,
  desconto: 0.15,
  precoComDesconto: function () {
    return this.preco * (1 - this.desconto);
  },
};

console.log(produto.preco);
console.log(produto.precoComDesconto());

const data = {
  dia: 01,
  mes: 01,
  ano: 2001,
};

console.log(`${data.dia}/${data.mes}/${data.ano}`);
data.dia = 30;
console.log(`${data.dia}/${data.mes}/${data.ano}`);

const usuario = {
  email: "aluno@cod3r.com",
};

usuario.nome = "David";

console.log(usuario.email);
console.log(usuario.nome);
console.log(usuario);
