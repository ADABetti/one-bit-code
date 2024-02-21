function calcularMediaAritmetica(...numbers) {
  const soma = numbers.reduce((acumulado, numero) => acumulado + numero, 0);
  return soma / numbers.length;
}
console.log(calcularMediaAritmetica(2, 3, 6, 7, 4));

function calcularMediaPonderada(...numbers) {
  const soma = numbers.reduce((acumulado, { number, weight }) => acumulado + (number * (weight ?? 1), 0));
  const somaWeight = numbers.reduce((acumulado, entrada) => acumulado + (entrada.weigth ?? 1), 0);
  return soma / somaWeight;
}
console.log(calcularMediaPonderada({ number: 9, weigth: 3 }, { number: 7 }, { number: 10, weight: 1 }));

function calcularMediana(...numbers) {
  const ordem = numbers.sort((a, b) => a - b);
  if (ordem.length % 2 === 0) {
    return (ordem[ordem.length / 2 - 1] + ordem[ordem.length / 2]) / 2;
  } else {
    return ordem[Math.floor(ordem.length / 2)];
  }
}
console.log(calcularMediana(2, 4, 5, 7, 42, 99));
console.log(calcularMediana(15, 14, 8, 7, 3));

function calcularModa(...numbers) {
  // [[num,qtd], [num, qtd]]
  const quantities = numbers.map((num) => [num, numbers.filter((n) => num === n).length]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
}
console.log(calcularModa(1, 5, 6, 7, 8, 5, 5, 5));
