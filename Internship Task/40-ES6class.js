

// Defining a class in ES6
class Person {
  // Constructor method is called when a new object is created
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method inside class
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an object of the class
const person1 = new Person('Hir', 20);
person1.greet(); 
// Output: Hello, my name is Hir and I am 20 years old.
