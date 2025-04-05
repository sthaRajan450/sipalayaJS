const user = {
  username: "rajan450",
  age: 23,
  address: "palpa",
};
let keyValuePair = [];
for (const key in user) {
  keyValuePair.push(`${key}:${user[key]} `);
}
console.log(keyValuePair);
