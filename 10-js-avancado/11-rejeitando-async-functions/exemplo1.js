// Usando async antes da function o Js já entende que vamos trabalhar com promises.
// Basta adicionar async antes da function e o return considera o resolve da promise

async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Arguments of sum must be numbers");
  }
  return a + b;
}

async function asyncSubtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Arguments of subtraction must be numbers");
  }
  return a - b;
}

const sumResult = asyncSum(50, 23);
const subtractResult = asyncSubtract(54, null);

Promise.all([sumResult, subtractResult]) //o método all permite executar as promises em conjunto. Se uma falhar todas falham e somente o erro é lançado no terminal.
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
