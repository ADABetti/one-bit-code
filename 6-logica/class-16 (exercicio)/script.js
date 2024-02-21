let numero = parseFloat(
  window.prompt("Escolha um número para fazer a multiplicação:")
);

let string = "";

for (let i = 0; i <= 20; i++) {
  string += `${i} x ${numero} = ${i * numero}
  `;
}

alert(`Confira a tabuada do ${numero}:
${string}`);
