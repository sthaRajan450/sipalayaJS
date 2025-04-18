try {
  if (true) {
    throw new Error("x not defined");
  }
} catch (error) {
  //   console.log(error.name);
  //   console.log(error.message);
  //   console.log(error.stack);
  console.log(error.stack);
} finally {
  console.log("Thank you!");
}
console.log("hello");

//runtime error
//compile time error

