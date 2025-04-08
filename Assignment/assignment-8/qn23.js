const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = [];

numbers.forEach((number) => {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
});

console.log(oddNumbers); 
