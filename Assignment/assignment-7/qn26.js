const obj = {
  key1: "value1",
  key2: "value2",
};

function checkEmptyObject(obj) {
  let count = 0;
  for (const key in obj) {
    count++;
  }
  if (count > 0) {
    console.log("Object is not empty");
  } else {
    console.log("Object is empty");
  }
}
// checkEmptyObject(obj);


// if (Object.keys(obj).length > 0) {
//   console.log("Object is not empty");
// } else {
//   console.log("Object is empty");
// }

