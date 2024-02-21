let pessoa = {
  nome: "Alice",
  idade: 29,
  dizerOla() {
    console.log("Olá " + this.nome);
  },
};

pessoa.dizerOla();
