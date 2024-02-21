const a = 0; // no js, 0 é considerado falso.
const b = null; //no js, null é considerado falso.
const c = "teste";
const d = undefined;

console.log(a || b || c); // operação de curto circuito.
console.log(a ?? b ?? c);
console.log(b ?? c); // o operador de coalescência verifica se o valor é nulo ou undefined e o ignora.
console.log(b ?? d); // o operador de coalescência verifica se o valor é nulo ou undefined e o ignora.

const e = 0;
const f = e || 40;
console.log({ e, f });

const g = 0;
const h = 0 ?? 20; // neste caso, o js considera o 0, pois o ?? ignora somente null e undefined.
console.log({ g, h });
