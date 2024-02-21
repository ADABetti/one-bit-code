let nome = window.prompt("Insira seu primeiro nome:");
let sobrenome = window.prompt("insira seu sobrenome:");
let campoEstudo = window.prompt("Insira o seu campo de estudo:");
let anoNascimento = window.prompt("Insira o ano de seu nascimento:");

let anoNascimentoNumber = parseFloat(anoNascimento);
let idade = 2023 - anoNascimentoNumber;

alert(`Recruta cadastrado com sucesso! 

Nome: ${nome} ${sobrenome}
Campo de estudo: ${campoEstudo}
Idade: ${idade}`);

console.log(
  `${nome} ${sobrenome} de ${idade} anos, trabalha no campo ${campoEstudo}`
);
