let velocidade = parseFloat(window.prompt("Qual era a sua velocidade?"));

// if (velocidade > 100) {
//   window.alert("Você foi multado!");
// } else if (velocidade == 100) {
//   window.alert("Cuidado! Você atingiu a velocidade máxima permitida.");
// } else {
//   window.alert("Você está dentro dos limites permitidos.");
// }

//Operadora ternário:

const multa =
  velocidade >= 100 ? window.alert("multa") : window.alert("Tudo bem");
