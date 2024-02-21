function sendSpaceship(spaceship: { pilot: string; copilot?: string }) {
  //utilizando o "?" o copilot vira um parâmetro opcional.
}

sendSpaceship({ pilot: "Han Solo", copilot: "Chewbacca" });
sendSpaceship({ pilot: "piotinho" });

// tipo unknown
let input: unknown;
input = "TESTE";
input = 12;
input = true;
input = [];

let text: string;
text = input; // não será atribuído porque text é uma string.
// Para evitar isso, pode-se usar any ex: input = any
// any não é recomendado, funciona exatamente como o JS.

// caso never
function verification(test) {
  if (test) {
  } else {
    let _check: never;
    _check = "";
    let text = _check;
    text = "teste";
    return _check;
  }
}
// O tipo never serve para mostrar um estado que a variável jamais deveria assumir.
