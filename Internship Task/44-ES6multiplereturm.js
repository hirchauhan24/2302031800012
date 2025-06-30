// ES6 Multiple Return using Array
const getCoordinates = () => {
  const x = 10;
  const y = 20;
  return [x, y]; // Returning multiple values as an array
};

const [xVal, yVal] = getCoordinates();
console.log(`X: ${xVal}, Y: ${yVal}`); // Output: X: 10, Y: 20

// ES6 Multiple Return using Object
const getUser = () => {
  return {
    name: "Hir",
    age: 20
  };
};

const { name, age } = getUser();
console.log(`Name: ${name}, Age: ${age}`); // Output: Name: Hir, Age: 20
