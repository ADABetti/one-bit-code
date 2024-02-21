//ESTADOS DE UMA PROMISE
// pendente = pending
// resolvida = resolved
// rejeitada = rejected

function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada");
    setTimeout(() => {
      if (true) {
        reject(false);
      } else {
        console.log("Executando a promise");
        resolve("ok");
      }
    }, 1000 * 2);
  });
}

execute()
  .then((result) => {
    console.log("A promise foi resolvida. Resultado: " + result);
  })
  .catch((err) => {
    console.log(`A promise foi rejeita. ${err}`);
  })
  .finally(() => {
    console.log("A promise foi finalizada.");
  });
