let n = 10;
let count = 0;
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (count < n) {
    if (i % 2 === 0) {
      sum += i;
      count++;
    }
  }
}
console.log(sum);
// console.log(2+4+6+8+10+12+14+16+18+20)