import { Spaceship } from "./index";
import * as qualquerNome from "lodash";

interface Battlespaceship extends Spaceship {
  weapons: number;
}

let xwing: Battlespaceship = {
  name: "X-wing",
  pilot: "Luke Cristovão da Silva",
  speed: 45,
  weapons: 3,
};

console.log(qualquerNome.camelCase(xwing.pilot));
console.log(qualquerNome.kebabCase(xwing.pilot));
