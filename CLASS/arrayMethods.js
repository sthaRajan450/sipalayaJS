const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//forEach   //loops through each element
arr.forEach((element) => {
  // console.log(element);
});

//map method
const multiplyByTwo = arr.map((element) => element * 2);
// console.log(arr);
// console.log(multiplyByTwo);

//filter method
const greaterThanFive = arr.filter((element) => element > 5);
// console.log(greaterThanFive);

let sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// console.log(sum);

//find method
const value = arr.find((item) => item == 5);
// console.log(value);

//includes method
const bool = arr.includes("a");
// console.log(bool);

const numbers = [2, 34, 6, 847, 8, 3, 7, 3, 54];
console.log(numbers.sort());

numbers.reverse();
// console.log(numbers);
