function checkNameProperty(user) {
  if ("name" in user) {
    console.log(`The 'name' of user is ${user.name}`);
  } else {
    console.log(`The 'name' property does not exist in user object.`);
  }
}
const user1 = { name: "Rajan", age: 23 };
const user2 = { age: 22 };

checkNameProperty(user1);
checkNameProperty(user2);
