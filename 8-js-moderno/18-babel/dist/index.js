"use strict";

function calcularMediaAritmetica() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var soma = numbers.reduce(function (acumulado, numero) {
    return acumulado + numero;
  }, 0);
  return soma / numbers.length;
}
console.log(calcularMediaAritmetica(2, 3, 6, 7, 4));
function calcularMediaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var soma = numbers.reduce(function (acumulado, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return acumulado + (number * (weight !== null && weight !== void 0 ? weight : 1), 0);
  });
  var somaWeight = numbers.reduce(function (acumulado, entrada) {
    var _entrada$weigth;
    return acumulado + ((_entrada$weigth = entrada.weigth) !== null && _entrada$weigth !== void 0 ? _entrada$weigth : 1);
  }, 0);
  return soma / somaWeight;
}
console.log(calcularMediaPonderada({
  number: 9,
  weigth: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
}));
function calcularMediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var ordem = numbers.sort(function (a, b) {
    return a - b;
  });
  if (ordem.length % 2 === 0) {
    return (ordem[ordem.length / 2 - 1] + ordem[ordem.length / 2]) / 2;
  } else {
    return ordem[Math.floor(ordem.length / 2)];
  }
}
console.log(calcularMediana(2, 4, 5, 7, 42, 99));
console.log(calcularMediana(15, 14, 8, 7, 3));
function calcularModa() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [[num,qtd], [num, qtd]]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
}
console.log(calcularModa(1, 5, 6, 7, 8, 5, 5, 5));