const render = require("./render");
const store = require("./store");

function initialize() {
  console.log("A operação está sendo inicializada.");
  render();
  store();
}

initialize();
