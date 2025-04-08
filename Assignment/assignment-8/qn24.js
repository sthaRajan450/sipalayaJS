const numbers = [1, 23, 35, 4, 54, 6, 74, 85, 9];
const greaterThan = [];
numbers.forEach((number) => {
  if (number > 10) {
    greaterThan.push(number);
  }
});
console.log(greaterThan)