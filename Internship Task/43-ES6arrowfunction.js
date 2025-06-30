//  43 ES6 Arrow Function 

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function version
const addArrow = (a, b) => a + b;

console.log(add(5, 3));       // Output: 8
console.log(addArrow(5, 3));  // Output: 8

// Arrow function with one parameter
const greet = name => console.log(`Hello, ${name}`);
greet("Hir"); // Output: Hello, Hir
