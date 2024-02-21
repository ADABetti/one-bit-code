function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text") {
  const input = document.createElement("input");
  input.id = id;
  input.name = name;
  input.value = value;
  input.type = type;
  return input;
}

const addExpBtn = document.getElementById("add-exp-btn");
const registerForm = document.getElementById("register-form");
const employees = [];
let inputRows = 0;

addExpBtn.addEventListener("click", function (ev) {
  ev.preventDefault();
  const addNewExp = document.getElementById("add-new-exp");

  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "input-row-" + rowIndex;
  newRow.className = "input-row";

  const expNameLabel = createLabel("Name: ", "exp-name-" + rowIndex);
  const expNameInput = createInput("exp-name-" + rowIndex, null, "exp-name");

  const expYears = createLabel("  Years of experience: ");

  const id1 = "exp-radio-" + rowIndex + ".1 ";
  const expRadio1 = createInput(id1, "0-2 years", "exp-" + rowIndex, "radio");
  const expLabel1 = createLabel(" 0-2 years ", id1);

  const id2 = "exp-radio-" + rowIndex + ".2";
  const expRadio2 = createInput(id2, "4-5 years", "exp-" + rowIndex, "radio");
  const expLabel2 = createLabel(" 4-5 years ", id2);

  const id3 = "exp-radio-" + rowIndex + ".3";
  const expRadio3 = createInput(id3, "5 years +", "exp-" + rowIndex, "radio");
  const expLabel3 = createLabel(" 5 years + ", id3);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.id = "remove-row-btn";
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remove";
  removeRowBtn.addEventListener("click", function (ev) {
    addNewExp.removeChild(newRow);
  });

  newRow.append(
    expNameLabel,
    expNameInput,
    expYears,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  );
  addNewExp.append(newRow);
});

registerForm.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullNameInput = document.getElementById("full-name");
  const birthdayInput = document.getElementById("birthday");
  const inputRows = document.querySelectorAll(".input-row");

  let experience = [];
  inputRows.forEach(function (row) {
    const experienceName = document.querySelector(
      "#" + row.id + " input[name = 'exp-name']"
    ).value;
    const yearsExperience = document.querySelector(
      "#" + row.id + " input[type='radio']:checked"
    ).value;

    experience.push({ name: experienceName, exp: yearsExperience });
  });

  const newEmployee = {
    fullName: fullNameInput.value,
    birthday: birthdayInput.value,
    experience,
  };
  employees.push(newEmployee);
  alert("Employee registered successfully");

  fullNameInput.value = "";
  birthdayInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(employees);
});
