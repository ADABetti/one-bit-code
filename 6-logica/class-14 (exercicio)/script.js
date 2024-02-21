let moneyAvailable = parseFloat(
  window.prompt("Qual a quantidade inicial de dinheiro disponível?")
);

let choice = "3";
let money = 0;

do {
  choice =
    window.prompt(`Você possui o valor de R$ ${moneyAvailable}. O que deseja fazer?
1. Adicionar valores.
2. Remover valores.
3. Cancelar operação.`);

  if (choice == 1) {
    money = parseFloat(window.prompt("Qual o valor que deseja adicionar?"));
    moneyAvailable += money;
  } else if (choice == 2) {
    money = parseFloat(window.prompt("Qual o valor que deseja remover?"));
    moneyAvailable -= money;
  }
} while (choice != 3);

window.alert("O programa foi encerrado.");
