const numbers = [12, 4, 6, 9, 1];
let minValue = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minValue) {
    minValue = numbers[i];
  }
}
console.log(`Minimun value is ${minValue}`);
