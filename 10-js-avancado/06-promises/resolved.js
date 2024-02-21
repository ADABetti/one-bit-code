//ESTADOS DE UMA PROMISE
// pendente = pending
// resolvida = resolved
// rejeitada = rejected

const p = new Promise((resolve) => {
  console.log("A promise está sendo executada")
  setTimeout(() => {
    console.log("Executando a promise")
    resolve("ok")
  }, 1000*2);
 
}
)

console.log(p)
