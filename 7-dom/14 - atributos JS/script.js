const input = document.getElementById("input");

document
  .getElementById("change-value-btn")
  .addEventListener("click", function () {
    input.value = "Hello world!";

    console.log(input.value); //Valor atribuído na função acima.
    console.log(input.getAttribute("value")); //Valor do HTML )
  });

document
  .getElementById("change-type-btn")
  .addEventListener("click", function () {
    input.type = input.type === "text" ? "radio" : "texto";
    //input.setAttribute("type", "radio"); //altera somente uma vez
  });

document
  .getElementById("change-placeholder-btn")
  .addEventListener("click", function () {
    input.placeholder = "Adicione um texto qualquer"; //funciona quando retirar o placeholder
  });

document.getElementById("disable-btn").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled); // só muda uma vez
});

document.getElementById("show-data-btn").addEventListener("click", function () {
  const data = input.dataset.something;
  console.log("O valor do atributo data-something é: " + data);
  input.dataset.something = "Isto aqui é outro valor.";
  console.log(
    "O valor do atributo data-something é: " + input.dataset.something
  );
});
