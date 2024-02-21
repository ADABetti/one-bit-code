"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qualquerNome = require("lodash");
var xwing = {
    name: "X-wing",
    pilot: "Luke Cristovão da Silva",
    speed: 45,
    weapons: 3,
};
console.log(qualquerNome.camelCase(xwing.pilot));
console.log(qualquerNome.kebabCase(xwing.pilot));
