function doubleValues(numbers) {
  return numbers.map((number) => {
    return number * 2;
  });
}

const doubled = doubleValues([1, 2, 3, 4, 5, 6]);
console.log(doubled);
