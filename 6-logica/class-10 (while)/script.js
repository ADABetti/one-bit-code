let velocidade = parseFloat(window.prompt("Qual a velocidade do veículo?"));

while (velocidade > 0) {
  window.alert(`A velocidade do carro é ${velocidade} km`);
  velocidade -= 20;
  window.alert(`Reduzindo 20 km`);
}

window.alert("O carro parou.");
