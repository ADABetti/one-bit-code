class Book {
  //classe
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
    this.published = false;
  }
  publish() {
    this.published = true;
  }
}

const turmaDaMonica = new Book("Turma da Mônica", 30); // instancia
turmaDaMonica.publish();
const sitioDoPicaPau = new Book("Sítio do Pica-Pau", 70);

console.log(turmaDaMonica);
console.log(sitioDoPicaPau);
console.log(sitioDoPicaPau instanceof Book);
