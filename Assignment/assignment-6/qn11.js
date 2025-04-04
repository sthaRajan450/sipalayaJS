let str = "Rajan Shrestha";
let newStr = "";
for (let i = 0; i < str.length; i++) {
  if ("aeiouAEIOU".includes(str[i])) {
    newStr += "*";
  } else {
    newStr += str[i];
  }
}
// using regular expressions
// let newStr = str.replace(/[aeiou]/gi, "*");
console.log(newStr);
