console.log("Programa iniciado.")

const setTimeoutId = setTimeout(() => {
  console.log("3 segundos se passaram depois que o programa foi iniciado")
},3000); // 3000 milisegundos que são equivalentes a 3 segundos. 

clearTimeout(setTimeoutId) // limpa o temporizador e agora ele será ignorado.

