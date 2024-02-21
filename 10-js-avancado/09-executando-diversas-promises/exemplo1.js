function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Arguments are invalid");
    } else {
      resolve(a + b);
    }
  });
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Arguments are invalid");
    } else {
      resolve(a - b);
    }
  });
}

const sumResult = asyncSum(50, 23);
const subtractResult = asyncSubtract(54, 90);

Promise.all([sumResult, subtractResult]) //o método all permite executar as promises em conjunto. Se uma falhar todas falham e somente o erro é lançado no terminal.
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
