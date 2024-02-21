function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18);
    } else {
      reject(new Error("Valor inválido"));
    }
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error("birthday is required"));
    }
  });
}

getAge("2009-02-03")
  .then((age) => {
    return checkAge(age);
  })
  .then((isOver18) => {
    if (isOver18) {
      console.log("Maior de idade ");
    } else {
      console.log("menor de idade");
    }
    p;
  });
