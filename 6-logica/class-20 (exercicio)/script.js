let pilha = [];
let opcao = "3";

do {
  opcao = prompt(
    "Cartas:\n" +
      pilha.length +
      "\n\n" +
      "O que deseja fazer?\n 1.Adicionar uma carta. \n 2.Puxar uma carta. \n 3.Sair"
  );

  switch (opcao) {
    case "1":
      let novaCarta = prompt("Qual carta deseja adicionar?");
      pilha.push(novaCarta);
      break;

    case "2":
      let ultimaCarta = pilha.pop();
      if (ultimaCarta) {
        alert(`A carta ${ultimaCarta} foi removida do baralho.`);
      } else {
        alert("Não há cartas no baralho.");
      }
      break;

    case "3":
      alert("O programa está sendo finalizado");
  }
} while (opcao !== "3");
