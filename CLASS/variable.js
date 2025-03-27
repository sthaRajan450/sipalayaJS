//variable is a container for storing data in memory location

// let a = 5;
// const PI = 3.14;
// var b = 5;
// console.log(a, b, PI);

// let _num = 5;
// let $num2 = 56;
// console.log(_num, $num2);
// const full_Name = "Rajan shrestha";
// console.log(full_Name);

//var : redeclare, hoisting and global scope
//let : no-redeclare, no hoisting and block scope

//const=>subset(let)=>subset(var)

var a = 8;
console.log(a);
var a = 45;
console.log(a);
a = 454;
console.log(a);
let b = 5;
console.log(b);
b = 56;
console.log(b);
const PI = 3.14;
console.log(PI);

// var x;  hoisting
console.log(x);
var x = 456;

//scope{}
{
  var y = 45;
  let num = 45; //block scoped or scoped variables
  const num2 = 56; //block scoped or scoped variables
}
console.log(y);
// console.log(num) //Reference Error
// console.log(num2) //Reference Error
