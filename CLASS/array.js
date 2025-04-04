// const array = [2, 3, 4, 5, 7];
// console.log(array);

// //methods
// console.log(array.length);

// console.log("push and pop");
// array.push(9, 45);
// console.log(array);
// const returned = array.pop();
// console.log(array);
// console.log(returned);

// console.log("shift  and unshift");
// array.unshift(9);
// console.log(array);
// array.shift();
// console.log(array);

// console.log("Slice");
// const newArray = array.slice(0, 3);
// console.log(newArray);

// console.log("Splice");
// array.splice(0, 2, "rajan");
// console.log(array);

// const alphabets = "abcdefg";
// console.log(Array.from(alphabets));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//mutate the original array
// arr.splice(2, 4);


//concat method
// const arr1 = [1, 2, 4];
// const newArr = arr1.concat([6, 7, 8, 9], [4, 5, 6]); //follow hierarchy
// console.log(newArr);

// //join method
// console.log(typeof arr1.join("*")); //returns string
// console.log(arr1.toString());

// //********************string methods********************
// let str = "hello world";    //string is immutable
// console.log(str.toUpperCase());
// console.log(str.startsWith("h"));
// console.log(str.length);

// console.log("Rajan" + "Shrestha");
// console.log(str.concat("", "Sipalaya"));

// let message = "            fdssf        sfdas       sdfsd     ";
// console.log(message.length);
// let newMessage = message.trim(); //returns a new string
// console.log(newMessage);
// console.log(newMessage.length);

// let newWord = message.replace("fdssf", "Hello"); //returns a new string
// let newWord2 = message.replaceAll("fdssf", "Hi"); //returns a new string
// console.log(newWord2);

// let bool=message.includes('a')
// console.log(bool)

//split converts a string into array
const name = "Nepal is a mountanious country";
let arr = name.split(" "); // (_) split by character and (__) split by words
console.log(arr.length);

const newStr = name.slice(0, 5);
console.log(newStr);