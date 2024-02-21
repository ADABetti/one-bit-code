const nomeVeiculo1 = window.prompt("Nome do veículo 1:");
const velocidadeVeiculo1 = parseFloat(
  window.prompt(`Qual a velocidade de ${nomeVeiculo1}?`)
);

const nomeVeiculo2 = window.prompt("Nome do veículo 2:");
const velocidadeVeiculo2 = parseFloat(
  window.prompt(`Qual a velocidade de ${nomeVeiculo2}?`)
);

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
  window.alert(`A velocidade de ${nomeVeiculo1} é maior que ${nomeVeiculo2}`);
} else if (velocidadeVeiculo1 < velocidadeVeiculo2) {
  window.alert(`A velocidade de ${nomeVeiculo2} é maior que ${nomeVeiculo1}`);
} else {
  window.alert("As velocidades são iguais.");
}
