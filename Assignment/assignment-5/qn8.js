function removeAndAddElement(arr) {
  arr.pop();
  arr.unshift("a");
  console.log(arr);
}
removeAndAddElement(["x", "y", "z"]);
