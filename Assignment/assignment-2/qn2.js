let sum = 0;
let n = 20;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(`Sum of first ${n} natural numbers is ${sum}`);

//OR
console.log(`Sum of first ${n} natural numbers is ${(n * (n + 1)) / 2}`);
