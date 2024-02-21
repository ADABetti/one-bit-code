const dataCasamento = {
  dia: 04,
  mes: 01,
  ano: 2023,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}.`;
  },
};

console.log(dataCasamento.exibir());
