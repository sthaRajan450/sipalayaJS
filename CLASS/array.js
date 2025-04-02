const array = [2, 3, 4, 5, 7];
console.log(array);

//methods
console.log(array.length);

console.log("push and pop");
array.push(9, 45);
console.log(array);
const returned = array.pop();
console.log(array);
console.log(returned);

console.log("shift  and unshift");
array.unshift(9);
console.log(array);
array.shift();
console.log(array);

console.log("Slice");
const newArray = array.slice(0, 3);
console.log(newArray);

console.log("Splice");
array.splice(0, 2, "rajan");
console.log(array);

const alphabets = "abcdefg";
console.log(Array.from(alphabets));
