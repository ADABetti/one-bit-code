class Wallet {
  #amount;
  #username;
  constructor() {
    this.#amount = 100.99 * 100; //10099
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log("Username must be a string");
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

// A diferença de usar um geter e um método é porque o método é uma função clara e devemos invocá-la o get é usado como propriedade.

myWallet.username = true;
console.log(myWallet.username);
