// const book = {
//   title: "Turma da Mônica",
//   pages: 30,
//   author: {
//     name: "Maurício de Souza",
//     age: 90,
//   },
//   pulished: true,
//   tags: ["children", "fun"],
//   inStock: 30,
//   addOnStock (quantity){
//     this.inStock +=quantity
//   }
// };

function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addInStock = function addInStock(quantity) {
    this.inStock += quantity;
  };
}

const author = "Maurício de Souza";
const tags = ["children", "fun"];

const turmaDaMonica = new Book("Turma da Mônica", 30, tags, author);

console.log(turmaDaMonica);
