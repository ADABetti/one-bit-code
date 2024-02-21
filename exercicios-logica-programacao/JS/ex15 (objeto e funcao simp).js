function gerarData(dia, mes, ano) {
  return {
    dia,
    mes,
    ano,
    exibir() {
      return `${this.dia}/${this.mes}/${this.ano}.`;
    },
  };
}

const d1 = gerarData(10, 10, 2010);
const d2 = gerarData(5, 5, 2005);
const d3 = gerarData(1, 1, 2001);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

/* PRÁTICA */

function gerarUsuario(email, senha) {
  return {
    email,
    senha,
    exibirDados() {
      return `your email is: ${this.email}
  your password is: ${this.senha}`;
    },
  };
}

const user1 = gerarUsuario("gab@gmail.com", "123");
const user2 = gerarUsuario("ali@gmail.com", "456");
const user3 = gerarUsuario("bcd@gmail.com", "789");

console.log(user1.exibirDados());
console.log(user2.exibirDados());
console.log(user3.exibirDados());
