const student = {
  name: "John",
  age: 18,
  grade: "A",
  address: "123Main St",
};
if ("email" in student) {
  console.log(`Email exist`);
} else {
  console.log(`Email does not exist`);
}
