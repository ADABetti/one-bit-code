function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`${username} registrado com sucesso.`);
  } else {
    alert("A senha não confirma.");
  }
}
