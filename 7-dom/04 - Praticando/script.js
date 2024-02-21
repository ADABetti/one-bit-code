function addContact() {
  const contactSection = document.getElementById("contacts-list");
  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  const ul = document.createElement("ul");
  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullName";
  nameLi.appendChild(nameInput);
  ul.appendChild(document.createElement("br"));
  ul.appendChild(nameLi);

  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Telefone: ";
  const phoneInput = document.createElement("input");
  phoneInput.type = "number";
  phoneInput.name = "phone";
  phoneLi.appendChild(phoneInput);
  ul.appendChild(document.createElement("br"));
  ul.appendChild(phoneLi);

  const emailLi = document.createElement("li");
  emailLi.innerHTML = "<label for='email'> Email: </label>";
  const emailInput = document.createElement("input");
  emailInput.type = "text";
  emailInput.name = "email";
  emailInput.id = "email";
  emailLi.appendChild(emailInput);
  ul.appendChild(document.createElement("br"));
  ul.appendChild(emailLi);

  contactSection.append(h3, ul);
}

function deleteContact() {
  const contactSection = document.getElementById("contacts-list");
  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}
