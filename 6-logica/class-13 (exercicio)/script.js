let opcao = "5";

do {
  opcao = window.prompt(
    "Escolha uma das opções a seguir: \n 1 \n 2 \n 3 \n 4 \n 5 - Encerrar"
  );
  switch (opcao) {
    case "1":
      window.alert("A opção escolhida foi 1");
      break;
    case "2":
      window.alert("A opção escolhida foi 2");
      break;
    case "3":
      window.alert("A opção escolhida foi 3");
      break;
    case "4":
      window.alert("A opção escolhida foi 4");
      break;
  }
} while (opcao != "5");

window.alert("Você escolheu encerrar o programa.");
