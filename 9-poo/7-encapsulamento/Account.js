class Account {
  #password;
  #balance = 4000;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
    // this.#balance = 0; Este valor foi passado como privado fora do construtor.
  }
  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "alice.bet@gmail.com",
  password: "12345678",
};

const myAccount = new Account(user);
console.log(myAccount.user);
console.log(myAccount.getBalance("alice.bet@gmail.com", "12345678"));

// Ao colocar essas novas informações, podemos subtistituir os atributos ou métodos públicos predefeinidos.
// Se os métodos ou atributos são privados, essas informações são criadas pelo JS.
// myAccount.email = "huntkyle@yahoo.com";
// myAccount.password = 876543;
// myAccount.balance = 1000;
// console.log(myAccount);
