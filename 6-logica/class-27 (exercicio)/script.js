function calcularTriangulo() {
  let base = parseFloat(prompt("Qual o valor da base?"));
  let altura = parseFloat(prompt("Qual o valor da altura?"));
  return (base * altura) / 2;
}

function calcularRetangulo() {
  let base = parseFloat(prompt("Qual o valor da base?"));
  let altura = parseFloat(prompt("Qual o valor da altura?"));
  return base * altura;
}

function calcularQuadrado() {
  let base = parseFloat(prompt("Qual o valor do lado?"));
  return base * base;
}

function calcularTrapezio() {
  let altura = parseFloat(prompt("Qual o valor do altura?"));
  let baseMaior = parseFloat(prompt("Qual o valor da base maior?"));
  let baseMenor = parseFloat(prompt("Qual o valor da base menor?"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularCirculo() {
  const pi = 3.14;
  let raio = parseFloat(prompt("Qual o valor do raio?"));
  return pi * raio * raio;
}

function exibirMenu() {
  return prompt(`Selecione a opção para o cálculo:

    1. Calcular a área do triângulo
    2. Calcular a área do retângulo
    3. Calcular a área do quadrado
    4. Calcular a área do trapézio
    5. Calcular a área do círculo
    6. Sair`);
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularTriangulo();
        break;
      case "2":
        resultado = calcularRetangulo();
        break;
      case "3":
        resultado = calcularQuadrado();
        break;
      case "4":
        resultado = calcularTrapezio();
        break;
      case "5":
        resultado = calcularCirculo();
        break;
      case "6":
        alert("Programa está sendo finalizado.");
        break;
      default:
        alert("Opção inválida!");
    }

    if (resultado) {
      alert(`Resultado é: ${resultado}`);
    }
  } while (opcao != "6");
}

executar();
