//Primeiro caso (sem desconto)
function calcularSalario(horasTrabalhadas, salarioPorHora) {
  let salarioMensal = horasTrabalhadas * salarioPorHora;
  return `Salário igual a R$ ${salarioMensal}.`;
}

console.log(calcularSalario(150, 40.5));

// Segundo caso (salário líquido)
function carcularSalarioLiquido(horasTrabalhadas, salarioPorHora) {
  let salarioBruto = horasTrabalhadas * salarioPorHora;
  let salarioLiquido = salarioBruto - salarioBruto * 0.3;
  return `O salário líquido do funcionário mensal é R$${salarioLiquido}`;
}

console.log(carcularSalarioLiquido(180, 60));
