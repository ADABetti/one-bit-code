const word = window.prompt("Qual palavra deseja consultar?");
let opposite = "";

for (let i = word.length - 1; i >= 0; i--) {
  opposite += word[i];
}

if (opposite == word) {
  alert(word + " é um palíndromo.");
} else {
  alert("Esta palavra NÃO é um palíndromo: " + "\n" + word + "\n" + opposite);
}
