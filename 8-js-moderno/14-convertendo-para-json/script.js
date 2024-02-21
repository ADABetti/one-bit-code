const string = `{"name": "Alice",
"age": 34,
"job": "Fullstack Developer",
"technologies": ["HTML","JS","SQL"],
"website":null
}`;

console.log(string);
const obj = JSON.parse(string);
console.log(obj);

const string2 = JSON.stringify(obj);
console.log(string2);
