function sum(a, b) {
  const firstNumber = Number(a);
  const secondNumber = Number(b);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error("arguments must be two numbers"); // classe de erro do js
  }

  return firstNumber + secondNumber;
}

try {
  console.log(sum(2, 9));
  console.log(sum(true, 14));
  console.log(sum(undefined, 22)); // quando o código atingir esta linha, ele irá automaticamente para o blodo do catch, porque um erro foi identificado. Nada do que está abaixo dele será executado.
  console.log(sum(18, "0"));
  console.log(sum(39, null));
  console.log(sum(13, "zero"));
} catch (error) {
  console.log("Um erro ocorreu"); // o try  e o catch trabalham juntos. Assim o erro é mostrado para o usuário.
  // console.log(error); // O próprio erro é passado como parâmetro.
  console.log(error.message); //a mensagem de erro é passada como parâmetro
} finally {
  console.log("Calculation's done");
}
