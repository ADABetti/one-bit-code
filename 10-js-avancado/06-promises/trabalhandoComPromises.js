function execute(){
  return new Promise((resolve, reject)=>{
    console.log("A promise está sendo ececutada")
    setTimeout(()=>{
      console.log("Resolvendo a promise")
      resolve("Resultado")
    }, 1000)
  })
}

const p = execute()
console.log(p)

setTimeout(()=>{
  console.log(p)
}, 2000)