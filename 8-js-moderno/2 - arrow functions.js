function normalSum(a, b) {
  return a + b;
}

console.log(`A soma de a + b é: ${normalSum(2, 2)}`);

const anonymousSum = function (a, b) {
  return a + b;
};
console.log(`A soma da função anônima é ${anonymousSum(3, 4)}`);

const arrowFunction = (a, b) => a + b;
console.log(`a soma da arrow function é: ${arrowFunction(5, 5)}`);

const double = (n) => `O dobro de ${n} é ${2 * n}`;
console.log(double(3));

const towns = ["Pedras", "ubatuba", "Pardinho", "Indaiatuba", "Poços de Calda", "São Paulo"];
const startWithP = towns.filter((town) => town[0] === "P");
console.log(startWithP);
