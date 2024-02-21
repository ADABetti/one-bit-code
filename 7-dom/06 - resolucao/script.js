function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const confirm = window.confirm(
    `Você deseja escalar o jogador ${name}, camisa ${number}, na posição ${position}? `
  );

  if (confirm) {
    const listaDoTime = document.getElementById("team-list");
    const playerItem = document.createElement("li");
    playerItem.id = "player-" + number;
    playerItem.innerText = position + ": " + name + " - " + number;
    listaDoTime.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const removePlayer = document.getElementById("player-" + number);
  const confirm = window.confirm(
    "Deseja remover o jogador " + removePlayer.innerText + "?"
  );

  if (confirm) {
    document.getElementById("team-list").removeChild(removePlayer);
    document.getElementById("numberToRemove").value = "";
  }
}
