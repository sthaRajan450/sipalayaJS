const numbers = {
  a: 23,
  b: 34,
  c: 34.5,
};
let sum = 0;
for (const key in numbers) {
  sum += numbers[key];
}
console.log(sum)