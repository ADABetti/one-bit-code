let a = 3;
let b = a * 7 + 10;

function semRetorno() {
  return console.log("função foi chamada");
}

let c = semRetorno();
console.log(a, b, c);
