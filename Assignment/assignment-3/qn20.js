function sumofMultiples(n) {
  let sum = 0;
  for (let i = n; i < 100; i += n) {
    sum += i;
  }
  console.log(`sum of all multiples of ${n} below 100 is ${sum}`);
}
sumofMultiples(3);
