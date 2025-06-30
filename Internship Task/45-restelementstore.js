// Rest Elements Example

// Function that accepts multiple arguments, but groups extras into an array
const showFruits = (fruit1, fruit2, ...others) => {
  console.log("Fruit 1:", fruit1);
  console.log("Fruit 2:", fruit2);
  console.log("Other Fruits:", others);
};

showFruits("Apple", "Banana", "Mango", "Pineapple", "Grapes");

// Output:
// Fruit 1: Apple
// Fruit 2: Banana
// Other Fruits: [ 'Mango', 'Pineapple', 'Grapes' ]
