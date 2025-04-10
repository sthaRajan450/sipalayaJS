//array destructuring
const numbers = [1, 3, 5, 6, 3, 5, 7, 4];
const [a, b, c, ...d] = numbers;
// console.log(a, b, c, d);

//object destructuring
const user = {
  username: "Rajan",
  email: "raj@goggle.com",
  school: "JVT",
  college: "PMC",
};
const { username: name, email, ...userEducation } = user;
console.log(`username:${name}, email:${email}`);
// console.log(userEducation);
const { school, college } = userEducation;
console.log(`school:${school} college:${college}`);
