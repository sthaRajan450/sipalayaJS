function findShortestString(arr) {
  let shortest = arr[0];
  arr.forEach((item) => {
    if (item.length < shortest.length) {
      shortest = item;
    }
  });
  return shortest
}
console.log(findShortestString(["Raj", "John", "Rajan", "Manish" ,'r']));
