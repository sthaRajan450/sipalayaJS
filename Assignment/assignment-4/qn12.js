let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];
let numbers;
// numbers = arrayOne.concat(arrayTwo);
// console.log(numbers);

//OR

numbers = [...arrayOne, ...arrayTwo];
console.log(numbers);
