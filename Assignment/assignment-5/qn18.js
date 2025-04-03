let arr = ["elephant", "giraffe"];
function addElement(arr) {
  arr.unshift("lion", "tiger");
  console.log(arr.length);
}
addElement(arr);
