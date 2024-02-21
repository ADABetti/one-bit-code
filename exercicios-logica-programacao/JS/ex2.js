function converterIdadeEmAnosParaDias(idade) {
  let dias = idade * 365;
  return `${idade} anos correspondem a ${dias} dias`;
}

console.log(converterIdadeEmAnosParaDias(90));
console.log(converterIdadeEmAnosParaDias(1));
console.log(converterIdadeEmAnosParaDias(27));
console.log(converterIdadeEmAnosParaDias(9));
