// let time = 11;
// let clock = "PM";

// if (time < 12 && clock == "AM") {
//   console.log("Morning");
// } else {
//   console.log("Afternoon");
// }

let currentTime = new Date().getHours();
if (currentTime < 12) {
  console.log("Morning");
} else {
  console.log("Afternoon");
}
