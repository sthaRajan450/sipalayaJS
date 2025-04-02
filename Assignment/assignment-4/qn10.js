const array = [1, 2, 3];
let newArray = [];
for (let i = 0; i < array.length; i++) {
  newArray.push(array[i] * array[i]);
}
console.log(newArray);

//OR
newArray = array.map((element) => element * element);
console.log(newArray);
