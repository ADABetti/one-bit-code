let array = ["nível1", ["nível2", 2, "II", ["outro array", 1, 2]], "nível3"];

console.log(array[1][0]);
console.log(array[1][3][0]);

let matriz = [
  ["l0 c0", "l0 c1", "l0 c2"],
  ["l1 c0", "l1 c1", "l1 c2"],
  ["l2 c0", "l2 c1", "l2 c2"],
];

// console.table(matriz);
// matriz[0].push("nova coluna");
// matriz.push(["nova linha"]);
// console.table(matriz);

// interando em arrays bidimensionais:

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    console.log(`Posição: ${i}, ${j}. Valor: ${elemento}`);
  }
}
