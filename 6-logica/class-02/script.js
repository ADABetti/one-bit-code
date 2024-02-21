console.log("TESTE");
console.error("Deu ruim");
console.warn("Woops, vai dar ruim");

// window.alert("olha só, temos um alerta");
let nome = window.prompt("Qual o seu nome?"); //input de infos
console.log(nome);

let confimacao = window.confirm(
  "Você tem certeza que quer fechar o documento sem salvar?"
);
console.log(confimacao); //retorna true or false
