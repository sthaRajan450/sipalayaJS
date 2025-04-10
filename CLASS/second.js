const {
  x,
  product,
  numbers,
  sum,
  subtract,
  multiply,
  divide,
  modulus,
} = require("./one.js");
const { printNumbers, sayHello } = require("./three.js");
console.log(x);
console.log(product);
console.log(numbers);
console.log(sum(4, 5));
console.log(subtract(4, 5));
console.log(divide(4, 5));
console.log(multiply(4, 5));
console.log(modulus(4, 5));

sayHello("Rajan");
printNumbers(45);
