console.log("Programa iniciado.")

let seconds = 0

const intervalId = setInterval(()=>
{seconds += 3
console.log(`Se passaram ${seconds} segundos.`)
if(seconds > 10){
  clearInterval(intervalId)
  console.log("Tempo esgotado, o programa está sendo encerrado.")
}
}, 1000*3)