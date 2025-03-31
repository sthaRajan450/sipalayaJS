function SmallestDivisible() {
  for (let i = 1; ; i++) {
    if (i % 3 == 0 && i % 4 === 0) {
      return i;
    }
  }
}
console.log(SmallestDivisible())
