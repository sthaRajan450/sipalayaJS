const array = [5, 6, 7, 8];
let number = 8;
let ispresent = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === number) {
    ispresent = true;
    break;
  }
}
// if (ispresent) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }

// OR
if (array.includes(number)) {
  console.log("Found");
} else {
  console.log("Not Found");
}
