function Data(dia, mes, ano) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;
  this.exibir = function () {
    return `${this.dia}/ ${this.mes}/ ${this.ano}`;
  };
}

const d1 = new Data(01, 01, 1202);
console.log(d1);
console.log(d1.exibir());
