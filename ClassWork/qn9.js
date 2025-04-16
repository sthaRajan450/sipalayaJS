function filterAdults() {}

const peoples = [
  {
    name: "Rajan",
    age: 20,
  },
  {
    name: "Manish",
    age: 23,
  },
  {
    name: "Nabin",
    age: 15,
  },
  {
    name: "Keshab",
    age: 18,
  },
];

function filterAdults(peoples) {
  return peoples.filter((people) => people.age >= 18);
}
const above18OrOlder = filterAdults(peoples);
console.log(above18OrOlder)