const numbers = [1, 2, 12, 4, 5];

async function asyncSquare(number) {
  return number * number;
}

Promise.all(numbers.map((number) => asyncSquare(number)))
  .then((squares) => {
    console.log(squares);
  })
  .catch((err) => {
    console.log(err);
  });
