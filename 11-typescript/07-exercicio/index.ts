const spaceships = [];

function addSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };

  spaceships.push(spaceship);
  alert(`A nave ${spaceship.name} foi adicionada`);
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  };
  spaceship = spaceships.find((ship) => ship.name === name);
  return spaceship;
}

function addCrewMember(member: string, spaceship: { name: string; crewLimit: number; crew: string[] }) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert("O membro não pode ser adicionado. O limite foi atingido");
  } else {
    spaceship.crew.push(member);
    alert(`O membro ${member} foi adicionada à tripuplação da nave ${spaceship.name}`);
  }
}

function sendInMission(spaceship: { name: string; crewLimit: number; crew: string[]; inMission: boolean }) {
  if (spaceship.inMission) {
    alert(`A nave ${spaceship.name} já está em missão`);
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(`É necessário adicionar novos tripulantes.`);
  } else {
    spaceship.inMission = true;
    alert(`A nave ${spaceship.name} foi enviada para a missão`);
  }
}

function firstMenuOption() {
  const name = prompt("Qual é o nome da nave a ser registrada?");
  const pilot = prompt(`Qual o nome do pilot da nave ${name}`);
  const crewLimit = Number(prompt(`Quantos tripulantes a nave ${name} suporta?`));

  const confirmation = confirm(`Tem certeza que deseja adicionar a nave: ${name}, com o piloto ${pilot} com o limite de ${crewLimit} tripulantes`);
  if (confirmation) {
    addSpaceship(name, pilot, crewLimit);
  }
}
function secondMenuOption() {
  const member = prompt("Qual é o nome do tripulante?");
  const spaceshipName = prompt(`Qual o nome da nave que o tripulante${member}`);

  const spaceship = findSpaceship(spaceshipName);
  if (spaceship) {
    const confirmation = confirm(`Deseja adicionar o tripulante ${member} na nave ${spaceship.name}`);
    if (confirmation) {
      addCrewMember(member, spaceship);
    }
  }
}

function thirdMenuOption() {
  const spaceshipName = prompt("Qual é o nome da nave a ser enviada?");
  const spaceship = findSpaceship(spaceshipName);
  if (spaceship) {
    const confirmation = confirm(`Deseja enviar a nave ${spaceship.name} para a missão?`);
    if (confirmation) {
      sendInMission(spaceship);
    }
  }
}

function fourthMenuOption() {
  let list = "Naves registradas:\n";
  spaceships.forEach((spaceship: { name: string; pilot: string; crewLimit: number; crew: string[]; inMission: boolean }) => {
    list += `Nave: ${spaceship.name}
    Piloto: ${spaceship.pilot}
    Em Missão? ${spaceship.inMission ? "sim" : "não"}
    Tamanho máximo da tripulação: ${spaceship.crewLimit}
    Tripulantes: ${spaceship.crew.length}
  `;
    spaceship.crew.forEach((member) => {
      list += ` -${member}\n`;
    });
  });

  alert(list);
}

/**
 * Menu
 */

let userOption = 0;

while (userOption !== 5) {
  const menu = `Painel Principal
  1 - Registrar uma nova nave
  2 - Adicionar membro da tripulação
  3 - Enviar nave em missão
  4 - Listar naves registradas
  5 - Encerrar`;

  userOption = Number.parseInt(prompt(menu));

  switch (userOption) {
    case 1:
      firstMenuOption();
      break;
    case 2:
      secondMenuOption();
      break;
    case 3:
      thirdMenuOption();
      break;
    case 4:
      fourthMenuOption();
      break;
    case 5:
      alert("Encerrando o sistema...");
      break;
    default:
      alert("Opção inválida! Retornando ao painel principal...");
      break;
  }
}
