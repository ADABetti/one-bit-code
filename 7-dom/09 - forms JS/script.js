const form = document.getElementById("orderform");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const name = document.querySelector("input[name ='name'] ").value;
  const address = document.querySelector("input[name ='address'] ").value;
  const breadType = document.querySelector("select[name ='breadType'] ").value;
  const main = document.querySelector("input[name ='protein'] ").value;
  const comments = document.querySelector("textArea[name ='comments'] ").value;
  let salad = "";
  document
    .querySelectorAll("input[name = 'salad']:checked")
    .forEach(function (item) {
      salad += " - " + item.value + "\n";
    });

  console.log({ name, address, breadType, main, salad, comments });

  alert(`Pedido realizado com sucesso.
  Seu pedido:
  Pão ${breadType} com ${main}, acompanhado com ${salad}.
  O pedido será entregue a(ao) ${name},
  no endereço: ${address}.
  `);
});
