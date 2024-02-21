function calcularDobro(x) {
  console.log(2 * x);
}

calcularDobro(9);
calcularDobro(10);
calcularDobro(12);
calcularDobro(14);

function sayHi(name = "mundo") {
  window.alert("Hello " + name + "!");
}

sayHi("Lucas");
sayHi(); // existe um padrão definido, ou seja, mesmo não passando o parâmetro, o JS entende que mundo é o parâmetro padrão.

function somarValores(a, b) {
  alert(`A soma de ${a} + ${b} = ${a + b}`);
}

somarValores(3, 5);

// function and object
function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

criarUsuario("Maria", "mariazinha@gmail.com", "1234");

function criarNovoUsuario(nome, tipo = "admin", email, senha) {
  const novoUsuario = {
    nome,
    tipo,
    email,
    senha,
  };
  console.log(novoUsuario);
}

criarNovoUsuario("Alice", "admin", "alice.net", "1223"); // se o parâmetro com default estiver no meio, é necessário especificá-lo.

function muitosParametros(usuario) {
  console.log(usuario);
}

const usuario1 = {
  nome: "Leila",
  idade: 89,
  situacao: "aposentada",
  email: "vovoleila@gmail.com",
};

muitosParametros(usuario1);
