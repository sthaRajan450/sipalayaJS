let name = "Rajan Shrestha";
let newName = "";
for (let i = 0; i < name.length; i++) {
  if (name[i] >= "A" && name[i] <= "Z") {
    newName += name[i].toLowerCase();
  } else {
    newName += name[i].toUpperCase();
  }
}
console.log(newName);
