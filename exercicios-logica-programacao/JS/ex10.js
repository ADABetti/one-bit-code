function retornarNovoArray(array) {
  let firstElement = array.shift();
  let lastElement = array.pop();
  let novoArray = [firstElement, lastElement];

  return novoArray;
}

console.log(retornarNovoArray([1, 2, 3, 4, 5]));
console.log(retornarNovoArray(["Dourado", 2, 3, 4, "Marcia"]));
