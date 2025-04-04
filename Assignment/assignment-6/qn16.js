let str = "      hello world        ";
str = str.trim();

let length = str.length;
if (length % 2 === 0) {
    console.log(`Even : ${length}`)
}
else{
    console.log(`Odd : ${length}`)

}