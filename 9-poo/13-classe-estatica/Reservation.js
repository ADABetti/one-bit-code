class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 150; // esse valor não será alterado.
  static showBaseFee() {
    console.log(`Base fee is ${Reservation.baseFee}`);
  }
}

Reservation.showBaseFee();

const reservation1 = new Reservation(3, "183", 30);
console.log(reservation1);

const reservetion2 = new Reservation(2, "400", 3);
console.log(reservetion2);
