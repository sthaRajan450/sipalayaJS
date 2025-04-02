let numbers = [1, 2, 3, 4, 5];
const mid = Math.ceil(numbers.length / 2);
const firstHalf = numbers.slice(0, mid);
const secondHalf = numbers.slice(mid);
console.log(firstHalf)
console.log(secondHalf)