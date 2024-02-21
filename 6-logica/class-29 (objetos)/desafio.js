let imoveisCadastrados = [];
let opcao = 3;

do {
  opcao = window.prompt(
    `Ímoveis cadastrados: ${imoveisCadastrados.length}.

    O que deseja fazer?
    1. Salvar novo imóvel.
    2. Consultar imóveis salvos.
    3. Sair.`
  );

  switch (opcao) {
    case "1":
      const propriedade = {};
      propriedade.dono = prompt("Qual o nome do proprietário?");
      propriedade.quarto = prompt("Quantos quartos a propriedade tem?");
      propriedade.banheiro = prompt("Quantos banheiros a propriedade tem?");
      propriedade.garagem = prompt("Tem garagem? sim/não");

      let confirmar =
        window.confirm(`Tem certeza que deseja registrar esse imóvel?
      Proprietário: ${propriedade.dono}.
      Quantidade de quartos: ${propriedade.quarto}.
      Quantidade de banheiros: ${propriedade.banheiro}
      Garagem: ${propriedade.garagem}.
      `);

      if (confirmar) {
        imoveisCadastrados.push(propriedade);
        alert("Imóvel cadastrado com sucesso.");
      } else {
        alert("Retornando ao  menu");
      }
      break;

    case "2":
      for (let i = 0; i < imoveisCadastrados.length; i++) {
        window.alert(`Imóvel: ${i + 1}
        Proprietário: ${imoveisCadastrados[i].dono};
        Quartos: ${imoveisCadastrados[i].quarto};
        Banheiros: ${imoveisCadastrados[i].banheiro};
        Garagem: ${imoveisCadastrados[i].garagem}
        
        `);
      }

    case "3":
      window.alert("Programa está sendo finalizado.");
      break;

    default:
      alert("Opção inválida");
  }
} while (opcao != "3");
