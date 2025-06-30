
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showDetails() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

const myCar = new Car("Toyota", "Fortuner");
myCar.showDetails(); // Output: Car: Toyota Fortuner
