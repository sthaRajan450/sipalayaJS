const array = [10, 20, 30];
let sum = 0;
array.forEach((element) => {
  sum += element;
});
console.log(`Average : ${sum / array.length}`);

const average = array.reduce((sum, element) => sum + element, 0) / array.length;
