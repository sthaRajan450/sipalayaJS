const array = [5, 12, 7, 14, 3];
let newArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    newArray.push(array[i]);
  }
}
console.log(newArray);

//OR

newArray = array.filter((element) => element > 10);
console.log(newArray);
