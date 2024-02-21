let valorEmMetros = parseFloat(window.prompt("Insira o valor em metros."));
const unidadeMedida = window.prompt(
  "Escreva a unidade de medida para conversão: km, hm, dam, dm, cm, mm"
);

let numeroConvertido = 0;

switch (unidadeMedida) {
  case "km":
    numeroConvertido = valorEmMetros * 0.001;
    window.alert(
      `O valor convertido em quilômetros é: ${numeroConvertido} km.`
    );
    break;
  case "hm":
    numeroConvertido = valorEmMetros * 0.01;
    window.alert(
      `O valor convertido em hectometros é: ${numeroConvertido} hm.`
    );
    break;
  case "dam":
    numeroConvertido = valorEmMetros * 0.1;
    window.alert(
      `O valor convertido em decametros é: ${numeroConvertido} dam.`
    );
    break;
  case "dm":
    numeroConvertido = valorEmMetros * 10;
    window.alert(`O valor convertido em decimetros é: ${numeroConvertido} dm.`);
    break;
  case "cm":
    numeroConvertido = valorEmMetros * 100;
    window.alert(
      `O valor convertido em centímetros é: ${numeroConvertido} cm.`
    );
    break;
  case "mm":
    numeroConvertido = valorEmMetros * 1000;
    window.alert(`O valor convertido em milímetros é: ${numeroConvertido} mm.`);
    break;
  default:
    window.alert("Opção inválida.");
}
