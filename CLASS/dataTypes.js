//Types of data that can be stored in varaibles
//Two types of data types
//1. Primitive data types
// 7 Number, String ,Boolean, Symbol , BigInt , Undefined , Null
//2. Non-primitive data types (Reference data types)
//object, array, maps, sets, functions,promises

let num1 = 23;
// console.log(typeof num1);

let name = new String("Rajan");
let name2 = "manish";
let name3 = "nabin";
let names = `names: ${name} ${name2} ${name3}`; //string interpolation string literals
// console.log(name);
// console.log(names);

let isLoggedIn = false;
// console.log(typeof isLoggedIn);

let a = Symbol("abc");
let b = Symbol("abc");
// console.log(a === b);

let number = 342567352565463235463257632n;
// console.log(typeof number);

let value = null; //explicitly saying that that variable is empty  and it has bug i.e data type=object
value = {
  name: "Rajan",
  age: 23,
};
// console.log(typeof value);

// console.log(value)
let val;
// console.log(val)

//non-primitive data types

//object :key-value pair  real world example:car  properties:height, speed, color, weight   methods: drive, stop, brake
const user = {
  "full name": "Rajan Shrestha",
  email: "raj@google.com",
  age: 34,
  address: "KTM",
};
console.log(user.email);
console.log(user["address"]);

//array : single variable that can hold multiple values (it can hold any type of data)
let numbers = [1, 2, 3, null, true, "Rajan", undefined];
// console.table(numbers);
numbers = {
  0: 1,
  1: 2,
  2: 3,
  3: null,
  4: true,
  5: "Rajan",
  6: undefined,
};
console.log(numbers[4])

console.log(numbers[5]);


