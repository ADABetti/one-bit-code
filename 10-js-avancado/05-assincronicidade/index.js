// exemplo de código síncrono (que segue linha por linha)

function setp02(){
  console.log("passo2")
}

console.log("passo1")
setp02()
console.log("passo3")

// exemplo de código assíncrono usando timeout. 
//Nesse caso o passo 6 será lido antes do passo 5.

console.log("step1")
setp02()
console.log("step3")
console.log("step4")
setTimeout(() => {
  console.log("step5")
}, 1000*2 )
console.log("step6")

