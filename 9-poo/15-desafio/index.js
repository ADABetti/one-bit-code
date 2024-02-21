const App = require("./App");

App.createUser("alice.betinha@teste.com", "Alice Teste");
App.createUser("kyle@teste.com", "Kyle Teste");
App.createUser("gabriel.testinho@teste.com", "Gabriel Testinho");

App.deposit("alice.betinha@teste.com", 5000);
App.transfer("alice.betinha@teste.com", "kyle@teste.com", 100);

App.changeLoanFee(10);
App.takeLoan("gabriel.testinho@teste.com", 200, 2);

console.log(App.findUser("alice.betinha@teste.com"));
console.log(App.findUser("alice.betinha@teste.com").account);

console.log(App.findUser("kyle@teste.com"));
console.log(App.findUser("kyle@teste.com").account);

console.log(App.findUser("gabriel.testinho@teste.com"));
console.log(App.findUser("gabriel.testinho@teste.com").account);
console.log(App.findUser("gabriel.testinho@teste.com").account.loans[0].installments);
