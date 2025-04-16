function sumArray(numbers) {
  return numbers.reduce((acc, number) => acc + number, 0);
}
const sum = sumArray([1, 2, 3, 4, 5]);
console.log(sum);
