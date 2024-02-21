const spaceship1 = {
  nome: "x-string",
  speed: 123,
};

function accelarate(spaceship: { nome: string; speed: number }, speed: number) {
  spaceship.speed = speed;
}

accelarate(spaceship1, 200);
