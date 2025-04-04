let str = "Hello EveryOne";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "e" || str[i] === "E") {
    count++;
  }
}
console.log(`The letter 'e' appears ${count} times`);
