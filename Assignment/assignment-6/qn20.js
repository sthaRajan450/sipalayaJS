const str = "Hello EveryOne One AnyOne";
const substr = "One";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (substr === str.slice(i, 3 + i)) {
    count++;
  }
}
console.log(count);
