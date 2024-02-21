const numbers = [1, 2, 3, true, 4, 5];

function asyncSquare(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject("Argument is invalid");
    } else {
      resolve(number * number);
    }
  });
}

Promise.all(numbers.map((number) => asyncSquare(number)))
  .then((squares) => {
    console.log(squares);
  })
  .catch((err) => {
    console.log(err);
  });
