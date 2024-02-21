function PhoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, ""); // está limpando o número de letras e espaços
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]; // selecionar somente os números nas posições 1,2 e 3 depois do +. A posição [0] indica a primeira posição do array.
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/g)[0];
  this.number = fixedString.match(/(?<=\)).+/gm)[0]; // O ponto indica qualuqer caracter e o + indica que não tem limite de vezes.
}

console.log(new PhoneNumber("+55 (11)09876-0987"));
console.log(new PhoneNumber("+1aa (32)09876-0987")); // por conta da regex ele exclui letras e espaços
console.log(new PhoneNumber("+1aa (340)09876-0987")); // por conta da regex ele exclui letras e espaços
