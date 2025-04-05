const person = {
  name: "Rajan",
  age: 23,
  friends: ["Manish", "Pradip", "keshab", "Nabin", "Sumit"],
};
function getFriends(obj) {
  if ("friends" in obj) {
    for (let i = 0; i < obj.friends.length; i++) {
      console.log(obj.friends[i]);
    }
  } else {
    console.log("No Friends!");
  }
}
getFriends(person);
