const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Tucuruvi", 100, "Pauliceia", "SBC", "SP");
const john = new Person("John Doe", addr);

console.log(john);
console.log(john.address.fullAddress());
