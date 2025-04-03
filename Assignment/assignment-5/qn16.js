let arr = [1, 2, 3, 4];
function addAndRemoveElement(arr) {
  arr.push(99);
  arr.shift();
  console.log(arr);
}
addAndRemoveElement(arr);
