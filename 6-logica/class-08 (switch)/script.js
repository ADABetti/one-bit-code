const resultado = window.prompt("Qual a sua nota?");
const resultadoNumerico = parseFloat(resultado);

switch (resultadoNumerico) {
  case 10:
    alert("Sua nota é a");
    break;
  case 9:
    alert("Sua nota é b");
    break;
  case 8:
    alert("Sua nota é c");
    break;
  case 7:
    alert("Sua nota é d");
    break;
  case 6:
    alert("Sua nota é f");
    break;
  case 5:
    alert("Sua nota é Desista meu filho");
    break;

  default:
    alert("Ocorreu um problema");
}
