function sum(...numbers) {
  return numbers.reduce((acumulado, numero) => acumulado + numero, 0);
}

console.log(sum(1, 1));
console.log(sum(1, 1, 4999, 2, 4, 4, 2, 3, 34));
