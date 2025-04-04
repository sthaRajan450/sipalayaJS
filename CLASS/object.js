//create
const user = {
  username: "Rajan",
  age: 23,
  address: "Palpa",
  "full name": "Rajan Shrestha",
  code: function () {
    console.log("Beginner in coding");
  },
  friends: ["Keshab", "Manish", "Pradip", "Sumit"],
  education: {
    college: "Patan Multiple Campus",
    course: "BIT",
    address: "Patan, Lalitpur",
  },
};

//Acess object Read
// console.log(user.username)
// console.log(user['username'])
// console.log(user["full name"]);
// user.code();
// console.log(user.friends);
// console.log(user.education.college);

//add
user.temporaryAddress = "KTM";

//update  only if key is present
user.username = "Manish";
// console.log(user);

//delete
delete user["full name"];
console.log(user);


//object is not iterable 
for (const key in user) {
  console.log(`${key} : ${user[key]}`);
}
