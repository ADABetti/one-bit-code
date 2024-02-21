const Person = require("./Person");

const john = new Person("John Doe", "Tucuruvi", 100, "Pauliceia", "SBC", "SP");

console.log(john);
console.log(john.address.fullAddress());
