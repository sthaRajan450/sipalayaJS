const employees = [
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
employees.map((employe) => {
  employe.status = "active";
});
console.log(employees);
