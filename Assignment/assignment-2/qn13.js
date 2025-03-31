let n = 5;
let count = 0;
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (count < n) {
    if (i % 2 !== 0) {
      sum += i;
      count++;
    }
  }
}
console.log(sum);
// console.log(1+3+5+7+9)
