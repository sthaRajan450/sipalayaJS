// //function is a block of reusable code  designed to perform specific task
// function sayHello() {
//   console.log("Hello");
// }
// sayHello();

// //nam anusar kam   (input,process,output)
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
//   console.log("hey");
// }
// console.log(addTwoNumbers(4, 5));

// function subtract(a) {
//   return a - 5;
// }
// let value = subtract(45);
// console.log(value);

// let a;
// console.log(a);

// let b=null;

// Immediately invoked function expression IIFE
(function greet(name) {
  console.log(`Good Afternoon ${name}`);
})("Manish");

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(5, 8));
