let array = ["Alice", "Aline", "Gabriel", "Afonso", "Silvia"];

// ADICIONAR ELEMENTOS:

// .push - no fim
console.log(array.push("Graziele"));
console.log(array);

// .unshift() - no começo
array.unshift("Andre");
console.log(array);

//REMOVER ELEMENTOS:

//.pop() - no fim
array.pop();
console.log(array);

// .shift() - no começo
array.shift();
console.log(array);

//PESQUISAR VALORES:

// .includes() - retorna verdadeiro ou falso
console.log(array.includes("Alice"));

// .indexOf() - retorna o índice do elemento
console.log(array.indexOf("Alice"));

//CORTAR E CONCATENAR:

// .slice() - copia e corta a partir dos índices parametrados.
let slice = array.slice(0, 2);
console.log(array);
console.log(array.slice(-2));

// .conctat() - concatena com valores parametrados.
let concat = array.concat(slice, "Amy");
console.log(concat);

//SUBSTITUIÇÃO DE ELEMENTOS

// .splice() - remove e substitui elementos
const elementosRemovidos = array.splice(0, 1, "Belinha");
console.log(elementosRemovidos);
console.log(array);

//ITERAR SOBRE ELEMENTOS
let nomes = ["Abi", "Liz", "Lua", "Ber"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
