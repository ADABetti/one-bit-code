const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nomeVaga;
    textoFinal += " ( " + vaga.candidatos.length + " candidatos )\n";
    return textoFinal;
  }, "");

  if (vagas.length == 0) {
    alert("Não há vagas cadastradas.");
  } else {
    alert(vagasEmTexto);
  }
}

function criarVaga() {
  const nomeVaga = prompt("Informe o nome da vaga");
  const descricaoVaga = prompt("Descreva a vaga");
  const dataLimite = prompt("Informe a data limite (dd/mm/aaaa");

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com estas informações?" +
      "\nNome da vaga: " +
      nomeVaga +
      "\nDescrição: " +
      descricaoVaga +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nomeVaga, descricaoVaga, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso");
  }
}

function exibirVaga() {
  const indice = prompt("Insira o índice da vaga que deseja consultar.");

  if (indice >= vagas.lenght || indice < 0) {
    alert("Índice inválido.");
    return;
  }

  const vaga = vagas[indice];
  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga nº: " +
      indice +
      "\nNome: " +
      vaga.nomeVaga +
      "\nDescrição: " +
      vaga.descricaoVaga +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      vaga.candidatosEmTexto
  );
}

function inscreverCandidato() {
  const nomeCandidato = prompt("Informe o nome do(a) candidato(a)");
  const indice = prompt(
    "Informe o índice da vaga para qual o candidato deseja se inscrever"
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o(a) candidato(a) " +
      nomeCandidato +
      "na vaga " +
      indice +
      "?" +
      "\nVaga: " +
      vaga.nomeVaga +
      "\nDescrição: " +
      vaga.descricaoVaga +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}

function excluirVaga() {
  const indice = prompt("Digite o índice da vaga que deseja excluir.");
  const vaga = vagas[indice];
  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga de índice " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricaoVaga +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      vaga.candidatosEmTexto
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga exluída com sucesso");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de vagas de emprego " +
      "\n\n Escolha uma das opções:\n" +
      "1. Listar vagas disponíveis. \n" +
      "2. Criar uma nova vaga. \n" +
      "3. Exibir uma vaga. \n" +
      "4. Inscrever um candidato \n" +
      "5. Excluir uma vaga \n" +
      "6. Sair do sistema"
  );
  return opcao;
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();
    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        criarVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Encerrando sistema.");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (opcao !== 6);
}

executar();
