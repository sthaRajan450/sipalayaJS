//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
// console.log(arr3);

let user = {
  username: "Rajan",
  email: "raj@goolge.com",
};
user = { ...user, gender: "Male" };
// console.log(user);

//rest operator
const sum = (...value) => value.reduce((acc, item) => acc + item, 0);
console.log("sum : " + sum(1, 3, 4, 6, 8, 4, 2, 3, 5, 74, 2));
