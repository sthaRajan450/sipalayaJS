let count = 0;
function countProperties(obj) {
  for (const key in obj) {
    count++;
  }
  console.log(count);
}

countProperties({ name: "rajan", age: 23, address: "arghakhanchi" });
