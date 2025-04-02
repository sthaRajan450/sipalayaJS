// let arr = [1, 2, 3, 4, 5];
// // arr.reverse();
// // console.log(arr);

// let reversedArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArr.push(arr[i]);
// }
// console.log(reversedArr);

//😂😂 tricky though
// const arr = [1, 2, 3, 4, 5];
// let newArr = [];
// const e = arr.pop();
// const d = arr.pop();
// const c = arr.pop();
// const b = arr.pop();
// const a = arr.pop();

// newArr.push(c, a, e, b, d);
// console.log(newArr);

//Write a function that takes a list of numbers and returns a list of reverse numnber

// function reverse(arr) {
//   let reverseArr = [];
//   //   return arr.reverse();
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   console.log(reverseArr);
// }
//  reverse([1, 2, 3, 4, 5]);

//returns only oodd

function oddNumbersList(arr) {
  let oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }
  return oddNumbers;
}
const odds = oddNumbersList([1, 2, 3, 4, 5]);
console.log(odds);

//find the maximum value
let arr = [2, 3, 4, 6, 7, 8];
let maxValue = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
  }
}
console.log(`Max value : ${maxValue}`);

//split the array into halfs
const mid = Math.ceil(arr.length / 2);
const firstHalf = arr.slice(0, mid);
const secondHalf = arr.slice(mid);
console.log(`First Half: ${firstHalf}`);
console.log(`Second Half: ${secondHalf}`);
