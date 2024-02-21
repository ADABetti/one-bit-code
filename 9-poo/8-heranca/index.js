class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }
  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(100, 300000);
const kyleHouse = new House(92, 230000);

console.log(land);
console.log(kyleHouse.getPricePerSquareMeter());
console.log(kyleHouse instanceof House);
console.log(kyleHouse instanceof Property);

class Apartment extends Property {
  constructor(number, area, price) {
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const kyleApto = new Apartment("149", 50, 150000);
console.log(kyleApto);
console.log(kyleApto.getFloor());
console.log(kyleApto.getPricePerSquareMeter());
