let cliente = {
  nome: "Alice",
  idade: 28,
  endereco: {
    rua: "Tucuruvi",
    numero: 123,
    pontosRef: ["pizzaria", "praça"],
  },
};

console.log(cliente["endereco"]);
console.log(cliente["endereco"]["rua"]);
console.log(cliente.endereco.pontosRef);
console.log(cliente.endereco.pontosRef[0]);
