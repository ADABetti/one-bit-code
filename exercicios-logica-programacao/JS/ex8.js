function repetir(valor, quantidade) {
  let array = [];

  for (let i = 0; i < quantidade; i++) {
    array.push(valor);
  }
  return array;
}

console.log(repetir(2, 4));
console.log(repetir("oi", 5));
console.log(repetir("A", 10));

// solução 2:

function repeat(item, quantity) {
  return Array(quantity).fill(item);
}

console.log(repeat(5, 2));
