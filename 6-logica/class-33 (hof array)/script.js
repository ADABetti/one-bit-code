const personagem = [
  { nivel: 4, nome: "Coragem", raca: "cachorro", forca: 2 },
  { nivel: 1, nome: "Scoob-doo", raca: "cachorro", forca: 2 },
  { nivel: 3, nome: "Frajola", raca: "gato", forca: 3 },
  { nivel: 2, nome: "Tom", raca: "gato", forca: 3 },
  { nivel: 5, nome: "Jerry", raca: "rato", forca: 5 },
];

//map (cria novo array)

let nomes = [];

for (let i = 0; i < personagem.length; i++) {
  nomes.push(personagem[i].nome);
}

console.log(nomes);

const nomesPersonagem = personagem.map(function (personagem) {
  return personagem.nome;
});

console.log(nomesPersonagem);

//filter (cria novo array)

const racaGato = [];
for (let i = 0; i < personagem.length; i++) {
  if (personagem[i].raca === "gato") {
    racaGato.push(personagem[i]);
  }
}
console.log(racaGato);

const racaCachorro = personagem.filter(function (personagem) {
  return personagem.raca === "cachorro";
});
console.log(racaCachorro);

//reduce (cria novo array)

let soma = 0;
for (let i = 0; i < personagem.length; i++) {
  soma += personagem[i].nivel;
}
console.log(soma);

const somaDosNiveis = personagem.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0);
console.log(somaDosNiveis);

const racas = personagem.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }

  return valorAcumulado;
}, {});

console.log(racas);

//sort (modifica o array original) No caso, usei o slice para copiar o array original antes de modificá-lo.
const personagensOdernadosCrescente = personagem.slice().sort(function (a, b) {
  return a.nivel - b.nivel;
});

console.log(personagensOdernadosCrescente);

const personagensOrdenadosDecrescente = personagem
  .slice()
  .sort(function (a, b) {
    return b.nivel - a.nivel;
  });

console.log(personagensOrdenadosDecrescente);
