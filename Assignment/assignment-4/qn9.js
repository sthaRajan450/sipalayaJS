let array = [1, 2, 2, 3, 4, 4, 5];
let duplicates = [];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] === array[j] && !duplicates.includes(array[i])) {
      duplicates.push(array[i]); 
    }
  }
}

console.log(duplicates); 


// let uniqueArray = [...new Set(array)];
