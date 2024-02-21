function addPlayer() {
  const section1 = document.getElementById("formulario");
  const ul = document.createElement("ul");

  const playerPosition = document.createElement("li");
  playerPosition.innerText = "Qual a posição do jogador? ";
  const inputPosition = document.createElement("input");
  inputPosition.type = "text";
  inputPosition.name = "input-position";
  playerPosition.appendChild(inputPosition);
  ul.appendChild(playerPosition);
  ul.appendChild(document.createElement("br"));

  const playerName = document.createElement("li");
  playerName.innerText = "Qual o nome do jogador? ";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.name = "input-name";
  playerName.appendChild(inputName);
  ul.appendChild(playerName);
  ul.appendChild(document.createElement("br"));

  const playerNumber = document.createElement("li");
  playerNumber.innerText = "Qual o número da camisa do jogador? ";
  const inputNumber = document.createElement("input");
  inputNumber.type = "number";
  inputNumber.Name = "input-numero";
  playerNumber.appendChild(inputNumber);
  ul.appendChild(playerNumber);
  ul.appendChild(document.createElement("br"));

  section1.appendChild(ul);

  const confirmButton = document.createElement("button");
  confirmButton.innerText = "Confirmar";
  section1.appendChild(confirmButton);
}

function deletePlayer() {
  const section1 = document.getElementById("formulario");
  const ul = document.getElementsByTagName("ul");
  const button = document.getElementsByTagName("button");

  section1.removeChild(ul[ul.length - 1]);
  section1.removeChild(button[button.length - 1]);
}
