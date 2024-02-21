let imoveisCadastrados = [];
let opcao = "";

do {
  opcao = prompt(`Imóveis cadastrados: ${imoveisCadastrados.length}
  
  O que deseja fazer?
  1. Salvar um novo imóvel.
  2. Mostrar imóveis salvos.
  3. Sair.`);

  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Qual o nome do proprietário?");
      imovel.quartos = prompt("Quantos quartos?");
      imovel.banheiros = prompt("Quantos banheiros?");
      imovel.garagem = prompt("possui garagem? (sim/não)");

      const confirmacao = confirm(
        "Salvar este imóvel?\n\n" +
          "Proprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveisCadastrados.push(imovel);
        alert("Imóvel cadastrado com sucesso");
      } else {
        alert("Voltando ao menu");
      }
      break;

    case "2":
      for (let i = 0; i < imoveisCadastrados.length; i++) {
        window.alert(
          "Imóvel: " +
            (i + 1) +
            "\nNome do proprietário: " +
            imoveisCadastrados[i].proprietario +
            "\nQuartos: " +
            imoveisCadastrados[i].quartos +
            "\nBanheiros: " +
            imoveisCadastrados[i].banheiros +
            "\nGaragem: " +
            imoveisCadastrados[i].garagem
        );
      }

      break;
    case "3":
      alert("O programa está sendo finalizado.");
      break;
    default:
      alert("Opção inválida.");
      break;
  }
} while (opcao != 3);
