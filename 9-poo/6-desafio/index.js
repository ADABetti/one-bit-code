const Author = require("./Author");

const john = new Author("John Doe");
const post = john.writePost("Título do Post", "lorem lorem lorem lomre lorem lorem lorem");
post.addComment("Alice", "Que matéria maravilhosa. Queria aprender");
post.addComment("Lucas", "Real, da hora");

console.log(post);
console.log(john);
