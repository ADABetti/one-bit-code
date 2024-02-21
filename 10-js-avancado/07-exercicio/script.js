function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof height !== "number" || typeof weight !== "number") {
      reject("Os valores não são números.");
    } else {
      resolve(weight / (height * height));
    }
  });
}

function showImc(weight, height) {
  imc(weight, height)
    .then((result) => {
      console.log(`O resultado do imc foi de ${result}.`);
      if (result < 18.5) {
        console.log("Magreza");
      } else if (result < 25) {
        console.log("Normal");
      } else if (result < 30) {
        console.log("Sobrepeso");
      } else if (result < 40) {
        console.log("Obesidade");
      } else {
        console.log("Obesidade grave");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`calculando o IMC para peso ${weight} e altura ${height}`);
}

showImc(50, 1.5);
showImc(100, 1.82);
showImc(70, "TEXTO");
