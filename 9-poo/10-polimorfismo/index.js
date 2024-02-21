class Vehicle {
  move() {
    console.log("O veículo está se movendo");
  }
}
class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A aeronave está voando à ${speed} km/h`);
  }
}

const ferrari = new Car();
const titanic = new Ship();
const boeing = new Aircraft();

// ferrari.move();
// titanic.move();
// boeing.move(900);

function start(vehicle) {
  console.log("Iniciando um veículo");
  vehicle.move();
}

start(ferrari);
start(titanic);
start(boeing);
