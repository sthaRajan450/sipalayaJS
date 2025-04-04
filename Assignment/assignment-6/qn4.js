let message = "Hello Rajan, Hello Keshab, Hello Manish";
message = message.split(" ");
for (let i = 0; i < message.length; i++) {
  if (message[i] === "Hello") {
    message[i] = "Hi";
  }
}
message = message.join(" ");
console.log(message);
