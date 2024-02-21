class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(discount) {
    console.log(this.price - (this.price * discount) / 100);
  }
}

const pencil = new Product("pencil", "write on paper", 4);
pencil.addToStock(9);
pencil.calculateDiscount(10);
console.log(pencil);

const watch = new Product("watch", "...", 80);
watch.addToStock(99);
watch.calculateDiscount(15);
console.log(watch);
