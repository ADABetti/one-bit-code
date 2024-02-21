let opcao = "";
let vagas = [];

do {
  opcao = window.prompt(`Bem-vindo ao sistema de empregos! O que deseja fazer?

1. Exibir vagas disponíveis.
2. Criar uma vaga.
3. Visualizar uma vaga.
4. Inscrever um candidato.
5. Excluir vaga.
6. Sair`);

  switch (opcao) {
    case "1":
      if (vagas.length == 0) {
        alert("Não há vagas registradas no sistema.");
      } else {
        for (let i = 0; i < vagas.length; i++) {
          alert(
            "Índice da vaga: " +
              i +
              "\n " +
              "Nome da vaga: " +
              vagas[i].nome +
              "\n " +
              "Candidatos inscritos: " +
              vagas[i].candidatos.length
          );
        }
      }
      break;
    case "2":
      let vaga = {};
      vaga.nome = window.prompt("Qual o nome da vaga?");
      vaga.descricao = prompt("Descreva a vaga");
      vaga.prazo = prompt("Qual o prazo para se candidatar?");
      vaga.candidatos = [];

      if (
        window.confirm(
          "Você confirma as informações abaixo?" +
            "\n" +
            vaga.nome +
            "\n" +
            vaga.descricao +
            "\n" +
            vaga.prazo
        )
      ) {
        vagas.push(vaga);
      }
      break;

    case "3":
      let vagaConsultada = window.prompt(
        "Qual o índice da vaga que deseja consultar?"
      );
      window.alert(
        "nome: " +
          vagas[vagaConsultada].nome +
          "\n" +
          "Descrição: " +
          vagas[vagaConsultada].descricao +
          "\n" +
          "Data Limite: " +
          vagas[vagaConsultada].prazo +
          "\n" +
          "Candidatos inscritos: " +
          vagas[vagaConsultada].candidatos.length
      );

      break;
    case "4":
      let nomeCandidato = prompt("Nome do candidato: ");
      let indiceVagaCandidatar = prompt(
        "Qual o índice da vaga para se candidatar?"
      );

      if (
        confirm(
          `O(A) candidato(a) ${nomeCandidato} está aplicando para a vaga de índice ${indiceVagaCandidatar}. Você confirma essas informações?`
        )
      ) {
        vagas[indiceVagaCandidatar].candidatos.push(nomeCandidato);
      }
      break;
    case "5":
      let indiceVagaDeletar = prompt(
        "Você selecionou a opção para deletar uma vaga. Informe o índice da vaga a ser deletada:"
      );
      if (
        window.confirm(
          "Verifique as informações abaixo: \n" +
            "Nome: " +
            vagas[indiceVagaDeletar].nome +
            "\n Descrição: " +
            vagas[indiceVagaDeletar].descricao +
            "\n Prazo: " +
            vagas[indiceVagaDeletar].prazo
        )
      ) {
        vagas.splice(indiceVagaDeletar, 1);
      }
      break;
    case "6":
      alert("O sistema está sendo encerrado.");
      break;
    default:
      alert("Opção inválida.");
      break;
  }
} while (opcao !== "6");
