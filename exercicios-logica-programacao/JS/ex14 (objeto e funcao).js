function gerarData(dia, mes, ano) {
  return {
    dia: dia,
    mes: mes,
    ano: ano,
    exibir: function () {
      return `${this.dia}/${this.mes}/${this.ano}.`;
    },
  };
}

const d1 = gerarData(10, 10, 2010);
const d2 = gerarData(5, 5, 2005);
const d3 = gerarData(1, 1, 2001);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
