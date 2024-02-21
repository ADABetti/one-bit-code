class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login foi bem sucedido");
    } else {
      console.log("Falha no procedimento");
    }
  }
}

const alice = new User("Alice", "alice.bet@gmail.com", "12345");
console.log(alice);

alice.login("alice.bet@gmail.com", "12345");
