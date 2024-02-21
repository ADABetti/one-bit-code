async function imc(weight, height) {
  if (typeof height !== "number" || typeof weight !== "number") {
    return Promise.reject("Os valores não são números.");
  }
  return weight / (height * height);
}

async function showImc(weight, height) {
  try {
    console.log(`calculando o IMC para peso ${weight} e altura ${height}`);
    const result = await imc(weight, height);
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
  } catch (err) {
    console.log(err);
  }
}

showImc(50, 1.5);
showImc(100, 1.82);
showImc(70, "TEXTO");
