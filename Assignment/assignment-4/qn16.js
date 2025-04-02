const arrayOne = [1, 2, 3];
const arrayTwo = [2, 3, 4];
let commonElements = [];
// commonElements = arrayOne.filter((element) => arrayTwo.includes(element));
// console.log(commonElements);

for (let i = 0; i < arrayOne.length; i++) {
  for (let j = 0; j < arrayTwo.length; j++) {
    if (arrayOne[i] === arrayTwo[j]) {
      commonElements.push(arrayOne[i]);
    }
  }
}
console.log(commonElements)