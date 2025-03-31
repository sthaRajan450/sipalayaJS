let currentDay = new Date().getDay();
if (currentDay >= 1 && currentDay <= 5) {
  console.log("Weekday");
} else {
  console.log("Weekend");
}
