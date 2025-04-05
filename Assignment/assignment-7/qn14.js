const users = [
  {
    name: "Rajan",
    designation: "Frontend Developer",
  },
  {
    name: "Keshab",
    designation: "Bakcend Developer",
  },
  {
    name: "Sumit",
    designation: "Cloud Operator",
  },
  {
    name: "Pradip",
    designation: "Networking specialist",
  },
];

// for (const user of users) {
//   console.log(user.name);
// }

const names = users.map((user) => user.name);
names.forEach((name) => console.log(name));
