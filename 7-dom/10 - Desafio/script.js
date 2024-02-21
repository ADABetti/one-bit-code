function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTechBtn = document.getElementById("add-tech-btn");
const form = document.getElementById("dev-form");
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener("click", function (ev) {
  const techInputs = document.getElementById("tech-inputs");
  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome: ", "tech-name-" + rowIndex);
  const techNameInput = createInput("tech-name-" + rowIndex, null, "tech-name");

  const expLabel = createLabel("Experiência: ");
  const id1 = "exp-radio-" + rowIndex + ".1";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "tech-exp-" + rowIndex,
    "radio"
  );
  const expLabel1 = createLabel("0-2 anos", id1);

  const id2 = "exp-radio-" + rowIndex + ".2";
  const expRadio2 = createInput(
    id2,
    "3-4 anos",
    "tech-exp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", id2);
  const id3 = "exp-radio-" + rowIndex + ".3";
  const expRadio3 = createInput(id3, "5+", "tech-exp-" + rowIndex, "radio");
  const expLabel3 = createLabel("5+", id3);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remover";
  removeRowBtn.addEventListener("click", function () {
    techInputs.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  );
  techInputs.appendChild(newRow);
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullNameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + " input[name='tech-name']"
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + " input[type='radio']:checked"
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { fullName: fullNameInput.value, technologies };
  developers.push(newDev);
  alert("Desenvolvedor cadastrado com sucesso");

  fullNameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});
