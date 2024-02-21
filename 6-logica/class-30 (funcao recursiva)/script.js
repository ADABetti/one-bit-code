function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

// dividir(30);
// dividir(40);
// dividir(100);
// dividir(8);

function dobrar(numero) {
  console.log(numero);
  if (numero < 200) {
    dobrar(numero * 2);
  } else {
    return numero;
  }
}

// dobrar(50);

//fatorial

function calcularFatorial(numero) {
  console.log(`Número ${numero}`);
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    console.log(`${numero} * ${numero - 1}!`);
    return numero * calcularFatorial(numero - 1);
  }
}

console.log(calcularFatorial(3));
console.log(calcularFatorial(6));
