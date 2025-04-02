let numbers = [3, 5, 7, 2, 8];
let maxValue = numbers[0];
for (const number of numbers) {
  if (number > maxValue) {
    maxValue = number;
  }
}
console.log(maxValue);
