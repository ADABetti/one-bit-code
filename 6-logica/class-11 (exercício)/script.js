const turista = window.prompt("Qual o seu nome?");
let cidades = "";
let contagemCidades = 0;

let continuar = window.prompt("Você visitou alguma cidade? (sim/não)");

while (continuar === "sim") {
  let cidade = window.prompt("Qual o nome da cidade visitada?");
  cidades += "- " + cidade + "\n";
  contagemCidades++;
  continuar = window.prompt("Você visitou mais cidades? (sim/não)");
}

window.alert(`${turista} viajou por ${contagemCidades} cidades:
${cidades}`);
