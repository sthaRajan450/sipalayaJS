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

// function oddNumbersList(arr) {
//   let oddNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       oddNumbers.push(arr[i]);
//     }
//   }
//   return oddNumbers;
// }
// const odds = oddNumbersList([1, 2, 3, 4, 5]);
// console.log(odds);

// //find the maximum value
// let arr = [2, 3, 4, 6, 7, 8];
// let maxValue = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxValue) {
//     maxValue = arr[i];
//   }
// }
// console.log(`Max value : ${maxValue}`);

// //split the array into halfs
// const mid = Math.ceil(arr.length / 2);
// const firstHalf = arr.slice(0, mid);
// const secondHalf = arr.slice(mid);
// console.log(`First Half: ${firstHalf}`);
// console.log(`Second Half: ${secondHalf}`);

// function largestNumber(array) {
//   let largestValue = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > largestValue) {
//       largestValue = array[i];
//     }
//   }
//   console.log(`Largest Number : ${largestValue}`);
// }
// largestNumber([93, 4, 5, 766, 4, 3, 6]);

// let currentDate=new Date(2025,4,12);  //getDay() retunrs 0-sunday to 6-saturday
// console.log(currentDate.toString())

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray = array.slice(7, array.length); //returns a new array
// console.log(newArray);

// //every and some method returns boolean  value either true or false
// const even = (elemen) => elemen % 2 === 0;
// console.log(array.every(even));

// //mutate the original array     --splice(stard point, count to delete, parameters to be added in place of removed items)
// array.splice(2, 4, "rajan", "manish", "nabin", "pradip", "keshab", "sumit");
// console.log(array);

// 😂😂 self exploartion
// let fullName = "Hello World";
// let name = fullName.split("");
// console.table(name);

// let fullName = "Hello World";
// let reversed = "";
// for (let i = fullName.length - 1; i >= 0; i--) {
//   reversed += fullName[i];
// }
// console.log(reversed)

let str = "radar";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
if (reverse === str) {
  console.log("Palindrome");
} else {
  console.log("Not palindrome");
}
