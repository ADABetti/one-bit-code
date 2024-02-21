async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Arguments of sum must be numbers");
  }
  return a + b;
}

// async function execute() {
//   asyncSum(2, 3).then((result) => {
//     console.log(result);
//   });
// }

async function execute() {
  try {
    const result = await asyncSum(2, 3); // o await faz com que a função seja síncrona de novo, porque ele só vai continuar o código com o resultado do await.
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

execute();
