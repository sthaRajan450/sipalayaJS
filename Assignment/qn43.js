let currentTime = new Date();
let hour = currentTime.getHours();
console.log(hour);
if (hour >= 9 && hour <= 17) {
  console.log("Working hours");
} else {
  console.log("Off hours");
}
