function sumofNaturalNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(`sum of first ${n} natural numbers is ${sum}`);
}
sumofNaturalNumbers(10);
