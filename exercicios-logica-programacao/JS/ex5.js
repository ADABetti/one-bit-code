// Exercício 5 parte I
function verificarNumero(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo == true) {
    if (numero >= minimo && numero <= maximo) {
      return true;
    } else {
      return false;
    }
  } else {
    if (numero > minimo && numero < maximo) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(verificarNumero(1, 0, 10));
// console.log(verificarNumero(0, 0, 10));
// console.log(verificarNumero(0, 0, 10, true));

// exercício 5 parte II
function maiorOuMenor(numero1, numero2) {
  if (numero1 >= numero2 && typeof numero1 == typeof numero2) {
    return true;
  } else {
    return false;
  }
}

console.log(maiorOuMenor(1, "1"));
console.log(maiorOuMenor(1, 1));
console.log(maiorOuMenor("1", "1"));
console.log(maiorOuMenor(10, 0));
console.log(maiorOuMenor(10, 20));
