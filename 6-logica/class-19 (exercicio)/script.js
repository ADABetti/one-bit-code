let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º" + " " + fila[i] + "\n";
  }

  opcao = window.prompt(
    "Pacientes: " +
      "\n" +
      pacientes +
      "\n" +
      "O que deseja fazer?  \n 1. Consultar paciente. \n 2. Adicionar paciente. \n 3. Sair. "
  );

  switch (opcao) {
    case "1":
      let pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(`O paciente ${pacienteConsultado} foi atendido.`);
      } else {
        alert("Não há pacientes em espera.");
      }
      break;

    case "2":
      let novoPaciente = prompt("Qual o nome do novo paciente?");
      fila.push(novoPaciente);
      break;

    case "3":
      alert("O programa está sendo finalizado.");
      break;

    default:
      alert("Opção inválida.");
      break;
  }
} while (opcao !== "3");
