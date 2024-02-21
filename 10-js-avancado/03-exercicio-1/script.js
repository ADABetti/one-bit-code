function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]/)) {
    const err = new Error("Email inválido.");
    err.input = "email";
    throw err;
  }
}

function validatePassword(password) {
  if (password.length < 8 || !password.match(/[a - z]/) || !password.match(/[A - Z]/) || !password.match(/\d/) || !password.match(/[^a-zA-Z\s0-9]/)) {
    const err = new Error("senha inválida");
    err.input = "password";
    throw err;
  }
}

function resetStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove("success", "error");
    document.querySelector(`#${key}-error`).textContent = "";
  });
}

const userInputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
};

const form = document.querySelector("form");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetStyles(userInputs);

  try {
    userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
    validatePassword(userInputs.password.value);
    userInputs.password.classList.add("success");
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});

// function createUser(email, password) {
//   this.email = email;
//   this.password = password;
//   if (password.match(/[(A-Za-z)(\d)(\!\@\#\$)]/gm)) {
//     window.alert("Senha cadastrada com sucesso");
//   } else {
//     window.alert("Você deve utilizar caracteres especiais");
//   }
//   if (email.match(/@/gm) && email.match(/\w+(?=@)/gm) >= 2 && email.match(/(?<=@)\w+./gm >= 2)) {
//     window.alert("Este é um email válido");
//   } else {
//     window.alert("Favor inserir um email válido");
//   }
// }

// // /@/gm se tem @
// // (/\w+(?=@)/gm)>=2 se tem texto antes do @
// // /(?<=@)\w+./gm >=2  se tem texto depois do @ seguido de .

// // /[(A-Za-z)(\d)(\!\@\#\$)]/gm //verificar letra maiúscula, caracter especial e número

// const usuarioAlice = createUser(email, password);
