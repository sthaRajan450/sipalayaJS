let str = "Hello Everyone";
let count = 0;
for (let i = 0; i < str.length; i++) {
  // if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u')
  // {
  //     count++
  // }

  if ("aeiouAEIOU".includes(str[i])) {
    count++;
  }
}
console.log(count);
