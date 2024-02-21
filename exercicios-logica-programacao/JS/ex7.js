function multiplicar(numero1, numero2) {
  let soma = 0;
  for (let i = 0; i < numero1; i++) {
    soma += numero2;
  }

  return soma;
}

console.log(multiplicar(3, 4));
console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
console.log(multiplicar(7, 0));
