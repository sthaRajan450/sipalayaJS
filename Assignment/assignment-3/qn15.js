const sumOfNaturalNumbers = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  console.log(
    `Sum of the squares of the  first ${n} natural numbers is ${sum} `
  );
};
sumOfNaturalNumbers(10);
