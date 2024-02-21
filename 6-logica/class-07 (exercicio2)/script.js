// Informações personagem 1
const atancante = window.prompt("Qual o nome do atacante?");
const poderAtaque = parseFloat(window.prompt("Qual o poder do ataque?")); //100

// Informações personagem 2
const defensor = window.prompt("Qual o nome do defensor?");
let pontosVida = parseFloat(
  window.prompt("Qual a quantidade de pontos de vida do personagem 2?") //500
);
const poderDefesa = parseFloat(window.prompt("Qual o poder de defesa?")); //50
const possuiEscudo = window.prompt("Possui escudo? (sim/não)"); //não

let danoCausado = 0; //50

//Condições
if (poderAtaque > poderDefesa && possuiEscudo == "não") {
  danoCausado = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && possuiEscudo == "sim") {
  danoCausado = (poderAtaque - poderDefesa) / 2;
}

pontosVida = pontosVida - danoCausado; //450

window.alert(`${atancante} causou ${danoCausado} em ${defensor}`);

window.alert(`${atancante}
Poder de ataque: ${poderAtaque}

${defensor}
Pontos de vida: ${pontosVida}
Poder de defesa: ${poderDefesa}
Possui escudo: ${possuiEscudo}`);
