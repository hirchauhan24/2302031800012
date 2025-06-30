// 42. ES6 Inheritance

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Derived class
class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent constructor using super
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks. It is a ${this.breed}.`);
  }
}

const dog1 = new Dog("Tommy", "German Shepherd");
dog1.speak(); // Output: Tommy barks. It is a German Shepherd.
