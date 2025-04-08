const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
// numbers.forEach((number) => (sum += number));
// console.log(`Sum : ${sum}`);

sum = numbers.reduce((acc, item) => acc + item, 0);
console.log(`Sum : ${sum}`);