// tipo literal não permite atribuir outro valor
// se comportam como o const.

let literal: "Hello world!";
let pi: 3.14159;

literal = "Hi!";
pi = 3;

const test = "teste";
test = "não vai atribuir este valor";

//===============================
// Assumindo mais de uma valor:
let option: "yes" | "no" | "maybe";
option = "no";
option = "yes";
console.log(option);

let teste: boolean | number;
type Planets = "Mercurio" | "VEnus" | "Terra";
let planets: Planets;
let homePlanet: Planets;
function checkPlanets() {}
if (planets === "Terra") {
  console.log("Estamos na Terra.");
}

// tipo função
type greetingCallack = (name: string) => void;
function greet(callbackfn: greetingCallack) {
  let name = "Alice";
  callbackfn(name); // aceita somente string como parâmetro
}
