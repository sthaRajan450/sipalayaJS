let message = "Hello Rajan, Hello Keshab, Hello Manish";
let newMessage = message.split(" ");
for (let i = 0; i < newMessage.length; i++) {
  if (newMessage[i] === "Hello") {
    newMessage[i] = "Hi";
  }
}
message = newMessage.join(" ");
console.log(message);
