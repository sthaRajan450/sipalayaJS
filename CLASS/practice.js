// let i = 1;
// let n = 100;
// let sum = 0;
// do {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
//   i++;
// } while (i <= n);
// console.log(`Sum of odd numbers from 1 to ${n} is ${sum}`);

function arithmeticOperations(a, b) {
  console.log(`Addition: ${a + b}`);
  console.log(`Subtraction: ${a - b}`);
  console.log(`Multiplication: ${a * b}`);
  console.log(`Division: ${a / b}`);
  console.log(`Modulus: ${a % b}`);
}
arithmeticOperations(45, 5);

//WAP that take a number and find the sum upto that number

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`sum of numbers from 1 to${n} is ${sum}`);
}

sum(100);

//Write a function that calculate largest value from two numbers

function compareNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
let number = compareNumbers(400, 5009, 800);
console.log(`The largest number is ${number}`);

//WAP to print number in reverse order

function reverse(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
// reverse(10);

//arrow functions
const add = (a, b) => a + b;
console.log(add(4, 5));
const subtract = (a, b) => a - b;
console.log(subtract(4, 5));
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));
const divide = (a, b) => a / b;
console.log(divide(4, 5));
const modulus = (a, b) => a % b;
console.log(modulus(4, 5));
