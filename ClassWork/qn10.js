function countOccurrences(arr) {
  return arr.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});
}

console.log(countOccurrences(["Rajan", "Raj", "Manish", "Raj"]))
